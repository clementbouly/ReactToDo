import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Task from "./Task.component";

let container = null;
beforeEach(() => {
  // met en place un élément DOM comme cible de rendu
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // nettoie en sortie de test
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const fakeTask = {
  id: 1,
  content: "coder en react avec le sourire",
  completed: false
};

it("renders Task without crashing", () => {
  act(() => {
    render(<Task task={fakeTask} />, container);
  });
  expect(container.textContent).toContain(fakeTask.content);
});

it("render Task content with fetched data", async () => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeTask)
    })
  );
  await act(async () => {
    render(<Task task={fakeTask} />, container);
  });

  expect(container.textContent).toContain(fakeTask.content);

  // retire la simulation pour assurer une bonne isolation des tests
  global.fetch.mockRestore();
});
