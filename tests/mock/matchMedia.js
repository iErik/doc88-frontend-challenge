/**
 * window.matchMedia (which is used by our MediaQuery mixin) is not
 * implemented in JSDOM by default, this is a workaround so that we
 * can still mount components that use this method.
 * you can find more information about it here: http://tiny.cc/ry9xhz
 */

window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }
})
