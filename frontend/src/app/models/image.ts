export class Image {

    _id?: string;
    title: string;
    description: string;
    url: string;

    constructor(url: string, title: string = 'Default title') {
        this.url = url;
        this.title = title;
        this.description = 'This is the default description for images';
    }
}
