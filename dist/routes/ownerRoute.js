"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var owner_1 = __importDefault(require("../models/owner"));
var car_1 = __importDefault(require("../models/car"));
var router = (0, express_1.Router)();
// post
router.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newOwner, savedOwner, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                newOwner = new owner_1.default(req.body);
                return [4 /*yield*/, newOwner.save()];
            case 1:
                savedOwner = _a.sent();
                res.status(201).send(savedOwner);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(500).send(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Get all 
router.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var owners, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, owner_1.default.find({})];
            case 1:
                owners = _a.sent();
                res.status(200).send(owners);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                res.status(500).send(err_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Get By ID 
router.get('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var owners, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, owner_1.default.findById(req.params.id)];
            case 1:
                owners = _a.sent();
                if (!owners) {
                    res.status(400).json({ error: 'Cannot find this owner' });
                }
                res.status(200).send(owners);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                res.status(500).send(err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Delete 
router.delete('/:id', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var ownerId, isReferenced, deletedOwner, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ownerId = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, car_1.default.exists({ ownerId: ownerId })];
            case 2:
                isReferenced = _a.sent();
                if (isReferenced) {
                    res.status(400).json({ error: 'Cannot delete ,it is referenced in other documents.', });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, owner_1.default.findByIdAndDelete(ownerId)];
            case 3:
                deletedOwner = _a.sent();
                if (!deletedOwner) {
                    res.status(404).json({ error: 'Owner not found' });
                    return [2 /*return*/];
                }
                res.status(200).json({ message: 'Owner deleted successfully' });
                return [3 /*break*/, 5];
            case 4:
                err_4 = _a.sent();
                console.error('Error deleting owner:', err_4);
                next(err_4);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
//# sourceMappingURL=ownerRoute.js.map