import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useInstruments } from "../src/api/queries/transactions/useInstruments";
import { usePortfolio } from "../src/api/queries/transactions/usePortfolio";
import { createWrapper } from "../test-utils/utils";

describe("test api calls", () => {
  test("portfolio", async () => {
    const { result } = renderHook(() => usePortfolio(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toBeDefined();
  });

  test("instruments", async () => {
    const { result } = renderHook(() => useInstruments(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toBeDefined();
  });
});
