import { renderHook, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, test } from "vitest";
import { useSearchActives } from "../src/api/queries/transactions/useSearchActives";
import { Actives } from "../src/features/actives/actives";
import Search from "../src/screens/search";
import { createWrapper, renderWithClient } from "../test-utils/utils";

describe("searchActives", () => {
  const activeTerm = "DYCA";
  test("input value", async () => {
    renderWithClient(<Search />);

    const input = screen.getByPlaceholderText("Search actives");

    await userEvent.type(input, activeTerm);

    expect(input).toHaveValue(activeTerm);
  });

  test("api call", async () => {
    const { result } = renderHook(() => useSearchActives(activeTerm), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toBeDefined();
  });

  test("render list", async () => {
    renderWithClient(<Actives activeTerm={activeTerm} />);

    const item = await screen.findByText(activeTerm);

    expect(item).toBeInTheDocument();
  });
});
