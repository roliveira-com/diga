"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ChatsService = /** @class */ (function () {
    function ChatsService() {
    }
    Object.defineProperty(ChatsService.prototype, "chats", {
        get: function () {
            return Array(200).fill('').map(function (ele, idx) { return ({
                contact: {
                    avatar: "https://randomuser.me/api/portraits/med/" + (idx % 2 === 0 ? 'women' : 'men') + "/" + idx + ".jpg",
                    // Random names
                    name: idx % 2 === 0 ?
                        (['Leeanna Munoz', 'Yolanda Karlin', 'Trish Peer'][idx % 3])
                        : (['Chuck Pulver', 'Oscar Blundell', 'Irwin Weathersby'][idx % 3])
                },
                type: 'DIRECT',
                when: Date.now() - ((idx + 1) * 7 * 60 * 1000),
                muted: idx % 7 === 0,
                unread: parseInt(Math.random() * 10 + '', 10) - 3,
                // Non-sense phrases
                text: [
                    '\u263A Yay, this course is amazing !!! \u270C',
                    'Sixty-four doesn\'t like paying taxes.',
                    'A river a thousand paces wide ever stuns the onlooker.',
                    'That stolen figurine is often one floor above you.',
                    '\u263A Yay, this course is amazing !!! \u270C',
                    'Spam sat down once more.',
                    'Whiskey on the table set a treehouse on fire.'
                ][idx % 7],
            }); });
        },
        enumerable: true,
        configurable: true
    });
    ChatsService.prototype.getMessages = function (chat) {
        return Array(200).fill('').map(function (ele, idx) { return ({
            // Non-sense phrases
            text: [
                '\u263A Yay, this course is amazing !!! \u270C',
                'Sixty-four doesn\'t like paying taxes.',
                'A river a thousand paces wide ever stuns the onlooker.',
                'That stolen figurine is often one floor above you.',
                '\u263A Yay, this course is amazing !!! \u270C',
                'Spam sat down once more!',
                'Whiskey on the table set a treehouse on fire.',
                'That memory we used to share stole the goods.',
                'Clear water rains heavily',
                'Style is interdependant on the relatedness of ' +
                    'motivation, subcultures, and management',
            ][Math.floor(Math.random() * 10)],
            chat: chat,
            sender: Math.random() > .5 ? chat.contact : null,
            created: Date.now() - ((idx + 1) * 40 * 60 * 1000),
            sent: Math.floor(4 * Math.random()),
        }); });
    };
    ChatsService = __decorate([
        core_1.Injectable()
    ], ChatsService);
    return ChatsService;
}());
exports.ChatsService = ChatsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYXRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFNM0M7SUFBQTtJQW1EQSxDQUFDO0lBbERDLHNCQUFXLCtCQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSyxPQUFBLENBQUM7Z0JBQzVDLE9BQU8sRUFBRTtvQkFDUCxNQUFNLEVBQUUsOENBQ0UsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxVQUM3QixHQUFHLFNBQU07b0JBQ3JCLGVBQWU7b0JBQ2YsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ2YsQ0FBQyxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQzlELENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUN4RTtnQkFDRCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7Z0JBQzlDLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQ3BCLE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztnQkFDakQsb0JBQW9CO2dCQUNwQixJQUFJLEVBQUU7b0JBQ0osK0NBQStDO29CQUMvQyx3Q0FBd0M7b0JBQ3hDLHdEQUF3RDtvQkFDeEQsb0RBQW9EO29CQUNwRCwrQ0FBK0M7b0JBQy9DLDBCQUEwQjtvQkFDMUIsK0NBQStDO2lCQUNoRCxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDWCxDQUFDLEVBeEIyQyxDQXdCM0MsQ0FBQyxDQUFDO1FBQ04sQ0FBQzs7O09BQUE7SUFFRCxrQ0FBVyxHQUFYLFVBQVksSUFBVTtRQUNwQixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRyxJQUFLLE9BQUEsQ0FBQztZQUM1QyxvQkFBb0I7WUFDcEIsSUFBSSxFQUFFO2dCQUNKLCtDQUErQztnQkFDL0Msd0NBQXdDO2dCQUN4Qyx3REFBd0Q7Z0JBQ3hELG9EQUFvRDtnQkFDcEQsK0NBQStDO2dCQUMvQywwQkFBMEI7Z0JBQzFCLCtDQUErQztnQkFDL0MsK0NBQStDO2dCQUMvQywyQkFBMkI7Z0JBQzNCLGdEQUFnRDtvQkFDaEQseUNBQXlDO2FBQzFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDakMsSUFBSSxNQUFBO1lBQ0osTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDaEQsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ2xELElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDcEMsQ0FBQyxFQW5CMkMsQ0FtQjNDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFsRFUsWUFBWTtRQUR4QixpQkFBVSxFQUFFO09BQ0EsWUFBWSxDQW1EeEI7SUFBRCxtQkFBQztDQUFBLEFBbkRELElBbURDO0FBbkRZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDaGF0IH0gZnJvbSAnLi4vLi4vY29yZS9tb2RlbHMvY2hhdC5tb2RlbCc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vLi4vY29yZS9tb2RlbHMvbWVzc2FnZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGF0c1NlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IGNoYXRzKCkge1xuICAgIHJldHVybiBBcnJheSgyMDApLmZpbGwoJycpLm1hcCgoZWxlLCBpZHgpID0+ICh7XG4gICAgICBjb250YWN0OiB7XG4gICAgICAgIGF2YXRhcjogYGh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL21lZC8ke1xuICAgICAgICAgICAgICAgICAgaWR4ICUgMiA9PT0gMCA/ICd3b21lbicgOiAnbWVuJ1xuICAgICAgICAgICAgICAgIH0vJHtpZHh9LmpwZ2AsXG4gICAgICAgIC8vIFJhbmRvbSBuYW1lc1xuICAgICAgICBuYW1lOiBpZHggJSAyID09PSAwID9cbiAgICAgICAgICAgICAgKFsnTGVlYW5uYSBNdW5veicsICdZb2xhbmRhIEthcmxpbicsICdUcmlzaCBQZWVyJ11baWR4ICUgM10pXG4gICAgICAgICAgICA6IChbJ0NodWNrIFB1bHZlcicsICdPc2NhciBCbHVuZGVsbCcsICdJcndpbiBXZWF0aGVyc2J5J11baWR4ICUgM10pXG4gICAgICB9LFxuICAgICAgdHlwZTogJ0RJUkVDVCcsXG4gICAgICB3aGVuOiBEYXRlLm5vdygpIC0gKChpZHggKyAxKSAqIDcgKiA2MCAqIDEwMDApLFxuICAgICAgbXV0ZWQ6IGlkeCAlIDcgPT09IDAsXG4gICAgICB1bnJlYWQ6IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAxMCArICcnLCAxMCkgLSAzLFxuICAgICAgLy8gTm9uLXNlbnNlIHBocmFzZXNcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgJ1xcdTI2M0EgWWF5LCB0aGlzIGNvdXJzZSBpcyBhbWF6aW5nICEhISBcXHUyNzBDJyxcbiAgICAgICAgJ1NpeHR5LWZvdXIgZG9lc25cXCd0IGxpa2UgcGF5aW5nIHRheGVzLicsXG4gICAgICAgICdBIHJpdmVyIGEgdGhvdXNhbmQgcGFjZXMgd2lkZSBldmVyIHN0dW5zIHRoZSBvbmxvb2tlci4nLFxuICAgICAgICAnVGhhdCBzdG9sZW4gZmlndXJpbmUgaXMgb2Z0ZW4gb25lIGZsb29yIGFib3ZlIHlvdS4nLFxuICAgICAgICAnXFx1MjYzQSBZYXksIHRoaXMgY291cnNlIGlzIGFtYXppbmcgISEhIFxcdTI3MEMnLFxuICAgICAgICAnU3BhbSBzYXQgZG93biBvbmNlIG1vcmUuJyxcbiAgICAgICAgJ1doaXNrZXkgb24gdGhlIHRhYmxlIHNldCBhIHRyZWVob3VzZSBvbiBmaXJlLidcbiAgICAgIF1baWR4ICUgN10sXG4gICAgfSkpO1xuICB9XG5cbiAgZ2V0TWVzc2FnZXMoY2hhdDogQ2hhdCk6IE1lc3NhZ2VbXSB7XG4gICAgcmV0dXJuIEFycmF5KDIwMCkuZmlsbCgnJykubWFwKChlbGUsIGlkeCkgPT4gKHtcbiAgICAgIC8vIE5vbi1zZW5zZSBwaHJhc2VzXG4gICAgICB0ZXh0OiBbXG4gICAgICAgICdcXHUyNjNBIFlheSwgdGhpcyBjb3Vyc2UgaXMgYW1hemluZyAhISEgXFx1MjcwQycsXG4gICAgICAgICdTaXh0eS1mb3VyIGRvZXNuXFwndCBsaWtlIHBheWluZyB0YXhlcy4nLFxuICAgICAgICAnQSByaXZlciBhIHRob3VzYW5kIHBhY2VzIHdpZGUgZXZlciBzdHVucyB0aGUgb25sb29rZXIuJyxcbiAgICAgICAgJ1RoYXQgc3RvbGVuIGZpZ3VyaW5lIGlzIG9mdGVuIG9uZSBmbG9vciBhYm92ZSB5b3UuJyxcbiAgICAgICAgJ1xcdTI2M0EgWWF5LCB0aGlzIGNvdXJzZSBpcyBhbWF6aW5nICEhISBcXHUyNzBDJyxcbiAgICAgICAgJ1NwYW0gc2F0IGRvd24gb25jZSBtb3JlIScsXG4gICAgICAgICdXaGlza2V5IG9uIHRoZSB0YWJsZSBzZXQgYSB0cmVlaG91c2Ugb24gZmlyZS4nLFxuICAgICAgICAnVGhhdCBtZW1vcnkgd2UgdXNlZCB0byBzaGFyZSBzdG9sZSB0aGUgZ29vZHMuJyxcbiAgICAgICAgJ0NsZWFyIHdhdGVyIHJhaW5zIGhlYXZpbHknLFxuICAgICAgICAnU3R5bGUgaXMgaW50ZXJkZXBlbmRhbnQgb24gdGhlIHJlbGF0ZWRuZXNzIG9mICcgK1xuICAgICAgICAnbW90aXZhdGlvbiwgc3ViY3VsdHVyZXMsIGFuZCBtYW5hZ2VtZW50JyxcbiAgICAgIF1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXSxcbiAgICAgIGNoYXQsXG4gICAgICBzZW5kZXI6IE1hdGgucmFuZG9tKCkgPiAuNSA/IGNoYXQuY29udGFjdCA6IG51bGwsXG4gICAgICBjcmVhdGVkOiBEYXRlLm5vdygpIC0gKChpZHggKyAxKSAqIDQwICogNjAgKiAxMDAwKSxcbiAgICAgIHNlbnQ6IE1hdGguZmxvb3IoNCAqIE1hdGgucmFuZG9tKCkpLFxuICAgIH0pKTtcbiAgfVxufSJdfQ==