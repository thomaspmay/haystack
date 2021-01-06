"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const userModels_1 = require("../entities/userModels");
let UserController = class UserController {
    constructor(UserService) {
        this.UserService = UserService;
    }
    create(user) {
        return this.userService.create(user).pipe(map((user) => user), catchError(err => of({ error: err.message })));
    }
    login(user) {
        return this.userService.login(user).pipe(map((jwt) => {
            return { access_token: jwt };
        }));
    }
    findOne(params) {
        return this.userService.findOne(params.id);
    }
    deleteOne(id) {
        return this.userService.deleteOne(Number(id));
    }
    updateOne(id, user) {
        return this.userService.updateOne(Number(id), user);
    }
    updateRoleOfUser(id, user) {
        return this.userService.updateRoleOfUser(Number(id), user);
    }
    uploadFile(file, req) {
        const user = req.user;
        return this.userService.updateOne(user.id, { profileImage: file.filename }).pipe(tap((user) => console.log(user)), map((user) => ({ profileImage: user.profileImage })));
    }
    findProfileImage(imagename, res) {
        return of(res.sendFile(join(process.cwd(), 'uploads/profileimages/' + imagename)));
    }
};
__decorate([
    common_1.Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof userModels_1.CreateUserDTO !== "undefined" && userModels_1.CreateUserDTO) === "function" ? _a : Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], UserController.prototype, "create", null);
__decorate([
    common_1.Post('login'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof User !== "undefined" && User) === "function" ? _b : Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], UserController.prototype, "login", null);
__decorate([
    Get(':id'),
    __param(0, Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], UserController.prototype, "findOne", null);
__decorate([
    hasRoles(UserRole.ADMIN),
    UseGuards(JwtAuthGuard, RolesGuard),
    Delete(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], UserController.prototype, "deleteOne", null);
__decorate([
    UseGuards(JwtAuthGuard, UserIsUserGuard),
    Put(':id'),
    __param(0, Param('id')), __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof User !== "undefined" && User) === "function" ? _c : Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], UserController.prototype, "updateOne", null);
__decorate([
    hasRoles(UserRole.ADMIN),
    UseGuards(JwtAuthGuard, RolesGuard),
    Put(':id/role'),
    __param(0, Param('id')), __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof User !== "undefined" && User) === "function" ? _d : Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], UserController.prototype, "updateRoleOfUser", null);
__decorate([
    UseGuards(JwtAuthGuard),
    common_1.Post('upload'),
    UseInterceptors(FileInterceptor('file', storage)),
    __param(0, UploadedFile()), __param(1, Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], UserController.prototype, "uploadFile", null);
__decorate([
    Get('profile-image/:imagename'),
    __param(0, Param('imagename')), __param(1, Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], UserController.prototype, "findProfileImage", null);
UserController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [Object])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map