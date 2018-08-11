export class Image {

    _id?: string;
    title: string;
    description: string;
    url: string;

    constructor(url: string) {
        this.url = url;
        this.title = 'lala';
        this.description = 'this is a description';
    }
}
