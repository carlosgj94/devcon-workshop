"use strict";

var _interopRequireDefault = require("/Users/carlosgonzalezjuarez/Development/devconWorkshop/devcon-workshop/node_modules/@babel/runtime/helpers/interopRequireDefault");

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("/Users/carlosgonzalezjuarez/Development/devconWorkshop/devcon-workshop/node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator"));

var puppeteer = require('puppeteer');

var dappeteer = require('dappeteer');

jest.setTimeout(20000);
describe('Buy ticket', function () {
  var browser;
  var metamask;
  var page;
  var navigationPromise;
  beforeAll(
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(done) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return dappeteer.launch(puppeteer);

            case 2:
              browser = _context.sent;
              _context.next = 5;
              return dappeteer.getMetamask(browser, {
                seed: 'rich strong gospel version clean start spoil enough orange toast venture avoid'
              });

            case 5:
              metamask = _context.sent;
              _context.next = 8;
              return metamask.switchNetwork('rinkeby');

            case 8:
              _context.next = 10;
              return browser.newPage();

            case 10:
              page = _context.sent;
              navigationPromise = page.waitForNavigation();
              done();

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  it('should display a happy message',
  /*#__PURE__*/
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var msg;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return page.goto('http://localhost:8080/', {
              waitUntil: 'networkidle2'
            });

          case 2:
            _context2.next = 4;
            return navigationPromise;

          case 4:
            _context2.next = 6;
            return page.waitForSelector('#happy-message');

          case 6:
            _context2.next = 8;
            return page.$eval('#happy-message', function (el) {
              return el.textContent;
            });

          case 8:
            msg = _context2.sent;
            expect(msg).toMatch('Let the hunger games begin');

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('should be able to type',
  /*#__PURE__*/
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return page.waitForSelector('#email-box');

          case 2:
            _context3.next = 4;
            return page.type('#email-box', 'carlos@guesser.io');

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
});