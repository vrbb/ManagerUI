export class Router {
    public handleRequest() {
        console.log('Handlig request for: '+this.getRoute());
    }

    private getRoute(): string{
        return window.location.pathname;
    }
}