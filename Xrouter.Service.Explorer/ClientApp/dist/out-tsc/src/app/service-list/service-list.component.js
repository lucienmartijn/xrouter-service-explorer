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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ServiceListComponent = /** @class */ (function () {
    function ServiceListComponent() {
        this.PAGE_SIZE = 3;
        this.services = {};
        this.queryInit = {
            isCurrent: false,
            clientId: 0
        };
        this.queryChanged = new core_1.EventEmitter();
        this.query = {
            pageSize: this.PAGE_SIZE
        };
        this.columns = [
            { title: 'Name', key: 'name' },
            { title: 'Node Count', key: 'nodeCount', isSortable: true },
            {}
        ];
    }
    ServiceListComponent.prototype.ngOnInit = function () {
        this.initializeQuery();
    };
    ServiceListComponent.prototype.ngOnChanges = function () {
        this.initializeQuery();
    };
    ServiceListComponent.prototype.onFilterChange = function () {
        this.query.page = 1;
        this.queryChanged.emit(this.query);
    };
    ServiceListComponent.prototype.initializeQuery = function () {
    };
    ServiceListComponent.prototype.resetFilter = function () {
        this.query = {
            page: 1,
            pageSize: this.PAGE_SIZE,
        };
        this.queryChanged.emit(this.query);
    };
    ServiceListComponent.prototype.sortBy = function (columnName) {
        if (this.query.sortBy === columnName) {
            this.query.isSortAscending = !this.query.isSortAscending;
        }
        else {
            this.query.sortBy = columnName;
            this.query.isSortAscending = true;
        }
        this.queryChanged.emit(this.query);
    };
    ServiceListComponent.prototype.onPageChange = function (page) {
        this.query.page = page;
        this.queryChanged.emit(this.query);
    };
    __decorate([
        core_1.Input('services'),
        __metadata("design:type", Object)
    ], ServiceListComponent.prototype, "services", void 0);
    __decorate([
        core_1.Input('query-init'),
        __metadata("design:type", Object)
    ], ServiceListComponent.prototype, "queryInit", void 0);
    __decorate([
        core_1.Output('query-changed'),
        __metadata("design:type", Object)
    ], ServiceListComponent.prototype, "queryChanged", void 0);
    ServiceListComponent = __decorate([
        core_1.Component({
            selector: 'service-list',
            template: "\n        <table class=\"table\">\n            <thead>\n              <tr>\n                <th *ngFor=\"let c of columns\">\n                    <div *ngIf=\"c.isSortable\" (click)=\"sortBy(c.key)\">\n                        {{ c.title }}\n                        <i *ngIf=\"query.sortBy === c.key\" \n                          class=\"fa\"\n                          [class.fa-sort-asc]=\"query.isSortAscending\"\n                          [class.fa-sort-desc]=\"!query.isSortAscending\"\n                        ></i>\n                      </div>\n                      <div *ngIf=\"!c.isSortable\">\n                        {{ c.title }}\n                      </div>\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let c of services.items\">\n                <td><a [routerLink]=\"[c.name]\">{{c.name}}</a></td>\n                <td>{{c.nodeCount}}</td>\n              </tr>\n            </tbody>\n          </table>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], ServiceListComponent);
    return ServiceListComponent;
}());
exports.ServiceListComponent = ServiceListComponent;
//# sourceMappingURL=service-list.component.js.map