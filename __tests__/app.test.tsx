import { screen } from "@testing-library/react";

import React from "react";
import { describe, expect, test } from "vitest";
import App from "../src/app";
import { renderWithClient } from "../test-utils/utils";

describe("render app", () => {
  test("find link", () => {
    renderWithClient(<App />);

    const homeLink = screen.getByRole("link", { name: "Home" });
    const searchLink = screen.getByRole("link", { name: "Search" });

    expect(homeLink).toHaveAttribute("href", "/");
    expect(searchLink).toHaveAttribute("href", "/search");
  });
});
