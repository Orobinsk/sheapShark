import '@testing-library/jest-dom';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
// import matchers from '@testing-library/jest-dom/types/matchers';
// import matchers from '@testing-library/jest-dom/matchers';

import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import * as matchers from "@testing-library/jest-dom/matchers";

// extends Vitest's expect method with methods from react-testing-library
// expect.extend(matchers);
declare module "vitest" {
    interface Assertion<T = any>
        extends jest.Matchers<void, T>,
        TestingLibraryMatchers<T, void> { }
}

expect.extend(matchers);
// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
    cleanup();
});