"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var userRoute_1 = __importDefault(require("./routes/userRoute"));
var carRoute_1 = __importDefault(require("./routes/carRoute"));
var carTrackingRoute_1 = __importDefault(require("./routes/carTrackingRoute"));
var ownerRoute_1 = __importDefault(require("./routes/ownerRoute"));
var connectDB_1 = __importDefault(require("./connectDB"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
var app = (0, express_1.default)();
var PORT = process.env.PORT;
// Middleware
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// MongoDB Connection
(0, connectDB_1.default)();
// Routes
app.use('/api/user', userRoute_1.default);
app.use('/api/car', carRoute_1.default);
app.use('/api/tracking', carTrackingRoute_1.default);
app.use('/api/owner', ownerRoute_1.default);
app.use(function (req, res) {
    res.status(404).json({ success: false, message: 'Route not found' });
});
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
//# sourceMappingURL=app.js.map