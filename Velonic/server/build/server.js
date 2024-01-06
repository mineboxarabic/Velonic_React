"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebDBDataSource = exports.AppDataSource = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
const Character_1 = require("./entity/gameEntities/Character");
const Ban_1 = require("./entity/gameEntities/Ban");
const Inventory_1 = require("./entity/gameEntities/Inventory");
const Whitelist_1 = require("./entity/gameEntities/Whitelist");
const Users_1 = require("./entity/gameEntities/Users");
const Horse_1 = require("./entity/gameEntities/Horse");
const Wagon_1 = require("./entity/gameEntities/Wagon");
const R_characters_1 = __importDefault(require("./routes/gameRoutes/R_characters"));
const R_users_1 = __importDefault(require("./routes/gameRoutes/R_users"));
const R_users_2 = __importDefault(require("./routes/webRoutes/R_users"));
const R_bans_1 = __importDefault(require("./routes/gameRoutes/R_bans"));
const R_inventory_1 = __importDefault(require("./routes/gameRoutes/R_inventory"));
const R_whitelist_1 = __importDefault(require("./routes/gameRoutes/R_whitelist"));
const R_horses_1 = __importDefault(require("./routes/gameRoutes/R_horses"));
const R_wagons_1 = __importDefault(require("./routes/gameRoutes/R_wagons"));
const Users_2 = __importDefault(require("./entity/webEntities/Users"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: undefined,
    database: "mt_rd",
    entities: [Character_1.Character, Ban_1.Ban, Inventory_1.Inventory, Whitelist_1.Whitelist, Users_1.User, Horse_1.Horse, Wagon_1.Wagon],
    synchronize: true,
});
exports.WebDBDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: undefined,
    database: "webdb",
    entities: [Users_2.default],
    synchronize: true,
});
function initializeDataSources() {
    return Promise.all([
        exports.AppDataSource.initialize(),
        exports.WebDBDataSource.initialize(),
    ]);
}
initializeDataSources().then(() => {
    console.log("Data Source has been initialized!");
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use('/w_users', R_users_2.default);
    app.use('/characters', R_characters_1.default);
    app.use('/users', R_users_1.default);
    app.use('/bans', R_bans_1.default);
    app.use('/inventory', R_inventory_1.default);
    app.use('/whitelist', R_whitelist_1.default);
    app.use('/mtrd_horses', R_horses_1.default);
    app.use('/mtrd_wagons', R_wagons_1.default);
    const PORT = 3001;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(error => console.log(error));
