"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MessageBoxComponent = /** @class */ (function () {
    function MessageBoxComponent(platform) {
        this.platform = platform;
    }
    MessageBoxComponent.prototype.ngOnInit = function () {
    };
    MessageBoxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-message-box",
            templateUrl: "./message-box.component.html",
            styleUrls: ["./message-box.component.css"]
        }),
        __param(0, core_1.Inject('platform')),
        __metadata("design:paramtypes", [Object])
    ], MessageBoxComponent);
    return MessageBoxComponent;
}());
exports.MessageBoxComponent = MessageBoxComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVzc2FnZS1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBUWpFO0lBRUUsNkJBQXVDLFFBQVE7UUFBUixhQUFRLEdBQVIsUUFBUSxDQUFBO0lBQUksQ0FBQztJQUVwRCxzQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUxVLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztTQUMzQyxDQUFDO1FBR2EsV0FBQSxhQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7O09BRnBCLG1CQUFtQixDQU0vQjtJQUFELDBCQUFDO0NBQUEsQUFORCxJQU1DO0FBTlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwibnMtbWVzc2FnZS1ib3hcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9tZXNzYWdlLWJveC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vbWVzc2FnZS1ib3guY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdwbGF0Zm9ybScpIHB1YmxpYyBwbGF0Zm9ybSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cbn0iXX0=