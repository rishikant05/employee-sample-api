"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const common_1 = require("@nestjs/common");
const util = require("util");
let LoggerService = class LoggerService extends common_1.Logger {
    setContext(context) {
        this.context = context;
    }
    log(message, context) {
        const formattedMessage = this.formatMessage(message);
        return super.log(formattedMessage, context);
    }
    error(message, trace, context) {
        return super.error(message, context);
    }
    warn(message, context) {
        const formattedMessage = this.formatMessage(message);
        return super.warn(formattedMessage, context);
    }
    debug(message, context) {
        const formattedMessage = this.formatMessage(message);
        return super.debug(formattedMessage, context);
    }
    verbose(message, context) {
        const formattedMessage = this.formatMessage(message);
        return super.verbose(formattedMessage, context);
    }
    formatMessage(message) {
        if (typeof message === 'object' || Array.isArray(message)) {
            return `\n  ${util.inspect(message, { colors: true, depth: null })}`;
        }
        return message;
    }
};
exports.LoggerService = LoggerService;
exports.LoggerService = LoggerService = __decorate([
    (0, common_1.Injectable)()
], LoggerService);
//# sourceMappingURL=logger.service.js.map