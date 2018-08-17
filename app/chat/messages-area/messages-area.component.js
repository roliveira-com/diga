"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../../core");
var MessagesAreaComponent = /** @class */ (function () {
    function MessagesAreaComponent() {
    }
    MessagesAreaComponent.prototype.ngOnInit = function () {
        this.messages = this.messages.slice(0, 50);
    };
    MessagesAreaComponent.prototype.ngAfterViewInit = function () {
    };
    MessagesAreaComponent.prototype.isContinuation = function (idx) {
        return (!this.messages[idx].sender && this.messages[idx - 1] &&
            !this.messages[idx - 1].sender) ||
            (this.messages[idx].sender && this.messages[idx - 1] &&
                this.messages[idx - 1].sender);
    };
    MessagesAreaComponent.prototype.getIcon = function (message) {
        switch (message.sent) {
            case core_2.SentStatus.NOT_SENT:
                return 'mdi-access-time';
            case core_2.SentStatus.SENT:
                return 'mdi-done';
            default:
                return 'mdi-done-all';
        }
    };
    MessagesAreaComponent.prototype.isViewed = function (message) {
        return message.sent === core_2.SentStatus.VIEWED;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], MessagesAreaComponent.prototype, "messages", void 0);
    MessagesAreaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-messages-area",
            templateUrl: "./messages-area.component.html",
            styleUrls: ["./messages-area.component.css"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        })
    ], MessagesAreaComponent);
    return MessagesAreaComponent;
}());
exports.MessagesAreaComponent = MessagesAreaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMtYXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXNzYWdlcy1hcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RztBQUN6RyxtQ0FBaUQ7QUFTakQ7SUFBQTtJQStCQSxDQUFDO0lBNUJDLHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsK0NBQWUsR0FBZjtJQUNBLENBQUM7SUFFRCw4Q0FBYyxHQUFkLFVBQWUsR0FBVztRQUN4QixNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQztZQUNsRCxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUM5QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHVDQUFPLEdBQVAsVUFBUSxPQUFnQjtRQUN0QixNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyQixLQUFLLGlCQUFVLENBQUMsUUFBUTtnQkFDdEIsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1lBQzNCLEtBQUssaUJBQVUsQ0FBQyxJQUFJO2dCQUNsQixNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ3BCO2dCQUNFLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDMUIsQ0FBQztJQUNILENBQUM7SUFFRCx3Q0FBUSxHQUFSLFVBQVMsT0FBZ0I7UUFDdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssaUJBQVUsQ0FBQyxNQUFNLENBQUM7SUFDNUMsQ0FBQztJQTdCUTtRQUFSLFlBQUssRUFBRTs7MkRBQTRCO0lBRHpCLHFCQUFxQjtRQVBqQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztZQUM1QyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1cscUJBQXFCLENBK0JqQztJQUFELDRCQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBJbmplY3QsIElucHV0LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1lc3NhZ2UsIFNlbnRTdGF0dXMgfSBmcm9tIFwiLi4vLi4vY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwibnMtbWVzc2FnZXMtYXJlYVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL21lc3NhZ2VzLWFyZWEuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL21lc3NhZ2VzLWFyZWEuY29tcG9uZW50LmNzc1wiXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VzQXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBtZXNzYWdlczogTWVzc2FnZVtdO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubWVzc2FnZXMgPSB0aGlzLm1lc3NhZ2VzLnNsaWNlKDAsNTApO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICB9XG5cbiAgaXNDb250aW51YXRpb24oaWR4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gKCF0aGlzLm1lc3NhZ2VzW2lkeF0uc2VuZGVyICYmIHRoaXMubWVzc2FnZXNbaWR4LTFdICYmXG4gICAgICAgICAgICAhdGhpcy5tZXNzYWdlc1tpZHgtMV0uc2VuZGVyKSB8fFxuICAgICAgICAgICAodGhpcy5tZXNzYWdlc1tpZHhdLnNlbmRlciAmJiB0aGlzLm1lc3NhZ2VzW2lkeC0xXSAmJlxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlc1tpZHgtMV0uc2VuZGVyKTtcbiAgfVxuXG4gIGdldEljb24obWVzc2FnZTogTWVzc2FnZSkge1xuICAgIHN3aXRjaCAobWVzc2FnZS5zZW50KSB7XG4gICAgICBjYXNlIFNlbnRTdGF0dXMuTk9UX1NFTlQ6XG4gICAgICAgIHJldHVybiAnbWRpLWFjY2Vzcy10aW1lJztcbiAgICAgIGNhc2UgU2VudFN0YXR1cy5TRU5UOlxuICAgICAgICByZXR1cm4gJ21kaS1kb25lJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnbWRpLWRvbmUtYWxsJztcbiAgICB9XG4gIH1cblxuICBpc1ZpZXdlZChtZXNzYWdlOiBNZXNzYWdlKSB7XG4gICAgcmV0dXJuIG1lc3NhZ2Uuc2VudCA9PT0gU2VudFN0YXR1cy5WSUVXRUQ7XG4gIH1cbn0iXX0=