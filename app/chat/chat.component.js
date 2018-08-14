"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var core_2 = require("../core");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(route, chatsService, router, platform) {
        this.route = route;
        this.chatsService = chatsService;
        this.router = router;
        this.platform = platform;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.chatIndex = +params['index'];
            _this.chat = _this.chatsService.chats[_this.chatIndex];
        });
        this.route.queryParams.subscribe(function (params) {
            _this.unread = +params['unread'];
        });
        this.getMessages();
    };
    ChatComponent.prototype.getMessages = function () {
        this.messages = this.chatsService.getMessages(this.chat);
    };
    ChatComponent.prototype.goBack = function () {
        this.router.back();
    };
    ChatComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-chat',
            templateUrl: './chat.component.html',
            styleUrls: ['./chat.component.css'],
        }),
        __param(3, core_1.Inject('platform')),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, core_2.ChatsService, router_2.RouterExtensions, Object])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUMxRCwwQ0FBaUQ7QUFDakQsc0RBQStEO0FBRS9ELGdDQUE0QztBQVM1QztJQU9FLHVCQUFvQixLQUFxQixFQUFVLFlBQTBCLEVBQVMsTUFBd0IsRUFBNkIsUUFBUTtRQUEvSCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBNkIsYUFBUSxHQUFSLFFBQVEsQ0FBQTtJQUVuSixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNoQyxLQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNyQyxLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFHRCxtQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUE3QlUsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDcEMsQ0FBQztRQVFpSCxXQUFBLGFBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTt5Q0FBeEcsdUJBQWMsRUFBd0IsbUJBQVksRUFBaUIseUJBQWdCO09BUG5HLGFBQWEsQ0E4QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTlCRCxJQThCQztBQTlCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDaGF0c1NlcnZpY2UsIENoYXQgfSBmcm9tICcuLi9jb3JlJ1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL2NvcmUvbW9kZWxzL21lc3NhZ2UubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICducy1jaGF0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGF0LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hhdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGNoYXRJbmRleDogbnVtYmVyO1xuICBwdWJsaWMgY2hhdDogQ2hhdDtcbiAgcHVibGljIHVucmVhZDogTnVtYmVyO1xuICBwdWJsaWMgbWVzc2FnZXM6IE1lc3NhZ2VbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBjaGF0c1NlcnZpY2U6IENoYXRzU2VydmljZSwgcHVibGljIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgQEluamVjdCgncGxhdGZvcm0nKSBwdWJsaWMgcGxhdGZvcm0pIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLmNoYXRJbmRleCA9ICtwYXJhbXNbJ2luZGV4J107XG4gICAgICB0aGlzLmNoYXQgPSB0aGlzLmNoYXRzU2VydmljZS5jaGF0c1t0aGlzLmNoYXRJbmRleF07XG4gICAgfSk7XG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIHRoaXMudW5yZWFkID0gK3BhcmFtc1sndW5yZWFkJ107XG4gICAgfSk7XG4gICAgdGhpcy5nZXRNZXNzYWdlcygpO1xuICB9XG5cblxuICBnZXRNZXNzYWdlcygpIHtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdGhpcy5jaGF0c1NlcnZpY2UuZ2V0TWVzc2FnZXModGhpcy5jaGF0KTtcbiAgfVxuXG4gIGdvQmFjaygpe1xuICAgIHRoaXMucm91dGVyLmJhY2soKTtcbiAgfVxufVxuIl19