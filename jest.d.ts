import "@testing-library/jest-dom";

// jest-dom 확장 타입 선언
import "jest";

declare module "jest" {
  interface Matchers<R> {
    toBeInTheDocument(): R;
    // 필요시 다른 jest-dom matcher도 추가
  }
}
