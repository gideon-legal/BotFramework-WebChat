import { Activity } from 'botframework-directlinejs';

export interface FormatOptions {
    showHeader?: boolean; // DEPRECATED: Use "title" instead
    bottomOffset?: number;
    topOffset?: number;
    rightOffset?: number;
    fullHeight?: boolean;
}

export interface ActivityOrID {
    activity?: Activity;
    id?: string;
}
