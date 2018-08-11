export interface RootObject {
    photos: Photos;
    stat: string;
}

export interface Photos {
    page: number;
    pages: number;
    perpage: number;
    total: string;
    photo: Photo[];
}

export interface Photo {
    id: string;
    owner: string;
    secret: string;
    server: string;
    farm: number;
    title: string;
    ispublic: number;
    isfriend: number;
    isfamily: number;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export namespace Convert {
    export function toRootObject(json: string): RootObject {
        return cast(JSON.parse(json), r('RootObject'));
    }

    export function rootObjectToJson(value: RootObject): string {
        return JSON.stringify(uncast(value, r('RootObject')), null, 2);
    }

    function invalidValue(typ: any, val: any): never {
        throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
    }

    function jsonToJSProps(typ: any): any {
        if (typ.jsonToJS === undefined) {
            const map: any = {};
            typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
            typ.jsonToJS = map;
        }
        return typ.jsonToJS;
    }

    function jsToJSONProps(typ: any): any {
        if (typ.jsToJSON === undefined) {
            const map: any = {};
            typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
            typ.jsToJSON = map;
        }
        return typ.jsToJSON;
    }

    function transform(val: any, typ: any, getProps: any): any {
        // tslint:disable-next-line:no-shadowed-variable
        function transformPrimitive(typ: string, val: any): any {
            if (typeof typ === typeof val) { return val; }
            return invalidValue(typ, val);
        }

        // tslint:disable-next-line:no-shadowed-variable
        function transformUnion(typs: any[], val: any): any {
            // val must validate against one typ in typs
            const l = typs.length;
            for (let i = 0; i < l; i++) {
                // tslint:disable-next-line:no-shadowed-variable
                const typ = typs[i];
                try {
                    return transform(val, typ, getProps);
                } catch (_) { }
            }
            return invalidValue(typs, val);
        }

        // tslint:disable-next-line:no-shadowed-variable
        function transformEnum(cases: string[], val: any): any {
            if (cases.indexOf(val) !== -1) { return val; }
            return invalidValue(cases, val);
        }

        // tslint:disable-next-line:no-shadowed-variable
        function transformArray(typ: any, val: any): any {
            // val must be an array with no invalid elements
            if (!Array.isArray(val)) { return invalidValue('array', val); }
            return val.map(el => transform(el, typ, getProps));
        }

        // tslint:disable-next-line:no-shadowed-variable
        function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
            if (val === null || typeof val !== 'object' || Array.isArray(val)) {
                return invalidValue('object', val);
            }
            const result: any = {};
            Object.getOwnPropertyNames(props).forEach(key => {
                const prop = props[key];
                const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
                result[prop.key] = transform(v, prop.typ, getProps);
            });
            Object.getOwnPropertyNames(val).forEach(key => {
                if (!Object.prototype.hasOwnProperty.call(props, key)) {
                    result[key] = transform(val[key], additional, getProps);
                }
            });
            return result;
        }

        if (typ === 'any') {return val; }
        if (typ === null) {
            if (val === null) { return val; }
            return invalidValue(typ, val);
        }
        if (typ === false) { return invalidValue(typ, val); }
        while (typeof typ === 'object' && typ.ref !== undefined) {
            typ = typeMap[typ.ref];
        }
        if (Array.isArray(typ)) {return transformEnum(typ, val); }
        if (typeof typ === 'object') {
            return typ.hasOwnProperty('unionMembers') ? transformUnion(typ.unionMembers, val)
                : typ.hasOwnProperty('arrayItems') ? transformArray(typ.arrayItems, val)
                    : typ.hasOwnProperty('props') ? transformObject(getProps(typ), typ.additional, val)
                        : invalidValue(typ, val);
        }
        return transformPrimitive(typ, val);
    }

    function cast<T>(val: any, typ: any): T {
        return transform(val, typ, jsonToJSProps);
    }

    function uncast<T>(val: T, typ: any): any {
        return transform(val, typ, jsToJSONProps);
    }

    function a(typ: any) {
        return { arrayItems: typ };
    }

    function u(...typs: any[]) {
        return { unionMembers: typs };
    }

    function o(props: any[], additional: any) {
        return { props, additional };
    }

    function m(additional: any) {
        return { props: [], additional };
    }

    function r(name: string) {
        return { ref: name };
    }

    const typeMap: any = {
        'RootObject': o([
            { json: 'photos', js: 'photos', typ: r('Photos') },
            { json: 'stat', js: 'stat', typ: '' },
        ], false),
        'Photos': o([
            { json: 'page', js: 'page', typ: 0 },
            { json: 'pages', js: 'pages', typ: 0 },
            { json: 'perpage', js: 'perpage', typ: 0 },
            { json: 'total', js: 'total', typ: '' },
            { json: 'photo', js: 'photo', typ: a(r('Photo')) },
        ], false),
        'Photo': o([
            { json: 'id', js: 'id', typ: '' },
            { json: 'owner', js: 'owner', typ: '' },
            { json: 'secret', js: 'secret', typ: '' },
            { json: 'server', js: 'server', typ: '' },
            { json: 'farm', js: 'farm', typ: 0 },
            { json: 'title', js: 'title', typ: '' },
            { json: 'ispublic', js: 'ispublic', typ: 0 },
            { json: 'isfriend', js: 'isfriend', typ: 0 },
            { json: 'isfamily', js: 'isfamily', typ: 0 },
        ], false),
    };
}
