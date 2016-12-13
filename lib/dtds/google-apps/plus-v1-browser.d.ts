// Type definitions for Google Google+ API v1
// Project: https://developers.google.com/+/api/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/plus.login
//   Know the list of people in your circles, your age range, and language
// https://www.googleapis.com/auth/plus.me
//   Know who you are on Google
// https://www.googleapis.com/auth/userinfo.email
//   View your email address
// https://www.googleapis.com/auth/userinfo.profile
//   View your basic profile info

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * Builds on top of the Google+ platform.
     */
    module plus {
        var activities: {
            /**
             * Get an activity.
             * @params {string} activityId The ID of the activity to get.
             */
            get: (params: {
                activityId: string;
            }) => {
                execute(callback: (data: IResponse<IActivity>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IActivity>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IActivity>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IActivity>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IActivity>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IActivity>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IActivity>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * List all of the activities in the specified collection for a particular user.
             * @params {string} collection The collection of activities to list.
             * @params {number} maxResults The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
             * @params {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
             * @params {string} userId The ID of the user to get activities for. The special value "me" can be used to indicate the authenticated user.
             */
            list: (params: {
                collection: string;
                maxResults?: number;
                pageToken?: string;
                userId: string;
            }) => {
                execute(callback: (data: IResponse<IActivityFeed>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IActivityFeed>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IActivityFeed>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IActivityFeed>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IActivityFeed>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IActivityFeed>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IActivityFeed>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Search public activities.
             * @params {string} language Specify the preferred language to search with. See search language codes for available values.
             * @params {number} maxResults The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
             * @params {string} orderBy Specifies how to order search results.
             * @params {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. This token can be of any length.
             * @params {string} query Full-text search query string.
             */
            search: (params: {
                language?: string;
                maxResults?: number;
                orderBy?: string;
                pageToken?: string;
                query: string;
            }) => {
                execute(callback: (data: IResponse<IActivityFeed>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IActivityFeed>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IActivityFeed>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IActivityFeed>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IActivityFeed>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IActivityFeed>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IActivityFeed>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        var comments: {
            /**
             * Get a comment.
             * @params {string} commentId The ID of the comment to get.
             */
            get: (params: {
                commentId: string;
            }) => {
                execute(callback: (data: IResponse<IComment>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IComment>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * List all of the comments for an activity.
             * @params {string} activityId The ID of the activity to get comments for.
             * @params {number} maxResults The maximum number of comments to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
             * @params {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
             * @params {string} sortOrder The order in which to sort the list of comments.
             */
            list: (params: {
                activityId: string;
                maxResults?: number;
                pageToken?: string;
                sortOrder?: string;
            }) => {
                execute(callback: (data: IResponse<ICommentFeed>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentFeed>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentFeed>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentFeed>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentFeed>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentFeed>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<ICommentFeed>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        var people: {
            /**
             * Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language.
             * @params {string} userId The ID of the person to get the profile for. The special value "me" can be used to indicate the authenticated user.
             */
            get: (params: {
                userId: string;
            }) => {
                execute(callback: (data: IResponse<IPerson>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IPerson>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPerson>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPerson>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPerson>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPerson>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPerson>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * List all of the people in the specified collection.
             * @params {string} collection The collection of people to list.
             * @params {number} maxResults The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
             * @params {string} orderBy The order to return people in.
             * @params {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
             * @params {string} userId Get the collection of people for the person identified. Use "me" to indicate the authenticated user.
             */
            list: (params: {
                collection: string;
                maxResults?: number;
                orderBy?: string;
                pageToken?: string;
                userId: string;
            }) => {
                execute(callback: (data: IResponse<IPeopleFeed>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IPeopleFeed>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPeopleFeed>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPeopleFeed>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPeopleFeed>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPeopleFeed>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPeopleFeed>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * List all of the people in the specified collection for a particular activity.
             * @params {string} activityId The ID of the activity to get the list of people for.
             * @params {string} collection The collection of people to list.
             * @params {number} maxResults The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
             * @params {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
             */
            listByActivity: (params: {
                activityId: string;
                collection: string;
                maxResults?: number;
                pageToken?: string;
            }) => {
                execute(callback: (data: IResponse<IPeopleFeed>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IPeopleFeed>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPeopleFeed>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPeopleFeed>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPeopleFeed>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPeopleFeed>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPeopleFeed>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
            /**
             * Search all public profiles.
             * @params {string} language Specify the preferred language to search with. See search language codes for available values.
             * @params {number} maxResults The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
             * @params {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. This token can be of any length.
             * @params {string} query Specify a query string for full text search of public text in all profiles.
             */
            search: (params: {
                language?: string;
                maxResults?: number;
                pageToken?: string;
                query: string;
            }) => {
                execute(callback: (data: IResponse<IPeopleFeed>, original: string) => void):void;
                then<U>(onFulfilled: (response: IPromiseResponse<IPeopleFeed>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPeopleFeed>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPeopleFeed>) =>  Thenable<U>, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPeopleFeed>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => Thenable<U>): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPeopleFeed>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => U): Thenable<U>;
                then<U>(onFulfilled: (response: IPromiseResponse<IPeopleFeed>) =>  U, onRejected?:(reason:IPromiseErrorResponse) => void): Thenable<U>;
            };
        };
        interface IAcl {
            /**
             * Description of the access granted, suitable for display.
             */
            description: string;
            /**
             * The list of access entries.
             */
            items: IPlusAclentryResource[];
            /**
             * Identifies this resource as a collection of access controls. Value: "plus#acl".
             */
            kind: string;
        }
        interface IActivity {
            /**
             * Identifies who has access to see this activity.
             */
            access: IAcl;
            /**
             * The person who performed this activity.
             */
            actor: {
                clientSpecificActorInfo: {
                    youtubeActorInfo: {
                        channelId: string;
                    };
                };
                displayName: string;
                id: string;
                image: {
                    url: string;
                };
                name: {
                    familyName: string;
                    givenName: string;
                };
                url: string;
                verification: {
                    adHocVerified: string;
                };
            };
            /**
             * Street address where this activity occurred.
             */
            address: string;
            /**
             * Additional content added by the person who shared this activity, applicable only when resharing an activity.
             */
            annotation: string;
            /**
             * If this activity is a crosspost from another system, this property specifies the ID of the original activity.
             */
            crosspostSource: string;
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * Latitude and longitude where this activity occurred. Format is latitude followed by longitude, space separated.
             */
            geocode: string;
            /**
             * The ID of this activity.
             */
            id: string;
            /**
             * Identifies this resource as an activity. Value: "plus#activity".
             */
            kind: string;
            /**
             * The location where this activity occurred.
             */
            location: IPlace;
            /**
             * The object of this activity.
             */
            object: {
                actor: {
                    clientSpecificActorInfo: {
                        youtubeActorInfo: {
                            channelId: string;
                        };
                    };
                    displayName: string;
                    id: string;
                    image: {
                        url: string;
                    };
                    url: string;
                    verification: {
                        adHocVerified: string;
                    };
                };
                attachments: {
                    content: string;
                    displayName: string;
                    embed: {
                        type: string;
                        url: string;
                    };
                    fullImage: {
                        height: number; // uint32
                        type: string;
                        url: string;
                        width: number; // uint32
                    };
                    id: string;
                    image: {
                        height: number; // uint32
                        type: string;
                        url: string;
                        width: number; // uint32
                    };
                    objectType: string;
                    thumbnails: {
                        description: string;
                        image: {
                            height: number; // uint32
                            type: string;
                            url: string;
                            width: number; // uint32
                        };
                        url: string;
                    }[];
                    url: string;
                }[];
                content: string;
                id: string;
                objectType: string;
                originalContent: string;
                plusoners: {
                    selfLink: string;
                    totalItems: number; // uint32
                };
                replies: {
                    selfLink: string;
                    totalItems: number; // uint32
                };
                resharers: {
                    selfLink: string;
                    totalItems: number; // uint32
                };
                url: string;
            };
            /**
             * ID of the place where this activity occurred.
             */
            placeId: string;
            /**
             * Name of the place where this activity occurred.
             */
            placeName: string;
            /**
             * The service provider that initially published this activity.
             */
            provider: {
                title: string;
            };
            /**
             * The time at which this activity was initially published. Formatted as an RFC 3339 timestamp.
             */
            published: string; // date-time
            /**
             * Radius, in meters, of the region where this activity occurred, centered at the latitude and longitude identified in geocode.
             */
            radius: string;
            /**
             * Title of this activity.
             */
            title: string;
            /**
             * The time at which this activity was last updated. Formatted as an RFC 3339 timestamp.
             */
            updated: string; // date-time
            /**
             * The link to this activity.
             */
            url: string;
            /**
             * This activity's verb, which indicates the action that was performed. Possible values include, but are not limited to, the following values:  
             * - "post" - Publish content to the stream. 
             * - "share" - Reshare an activity.
             */
            verb: string;
        }
        interface IActivityFeed {
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The ID of this collection of activities. Deprecated.
             */
            id: string;
            /**
             * The activities in this page of results.
             */
            items: IActivity[];
            /**
             * Identifies this resource as a collection of activities. Value: "plus#activityFeed".
             */
            kind: string;
            /**
             * Link to the next page of activities.
             */
            nextLink: string;
            /**
             * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
             */
            nextPageToken: string;
            /**
             * Link to this activity resource.
             */
            selfLink: string;
            /**
             * The title of this collection of activities, which is a truncated portion of the content.
             */
            title: string;
            /**
             * The time at which this collection of activities was last updated. Formatted as an RFC 3339 timestamp.
             */
            updated: string; // date-time
        }
        interface IComment {
            /**
             * The person who posted this comment.
             */
            actor: {
                clientSpecificActorInfo: {
                    youtubeActorInfo: {
                        channelId: string;
                    };
                };
                displayName: string;
                id: string;
                image: {
                    url: string;
                };
                url: string;
                verification: {
                    adHocVerified: string;
                };
            };
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The ID of this comment.
             */
            id: string;
            /**
             * The activity this comment replied to.
             */
            inReplyTo: {
                id: string;
                url: string;
            }[];
            /**
             * Identifies this resource as a comment. Value: "plus#comment".
             */
            kind: string;
            /**
             * The object of this comment.
             */
            object: {
                content: string;
                objectType: string;
                originalContent: string;
            };
            /**
             * People who +1'd this comment.
             */
            plusoners: {
                totalItems: number; // uint32
            };
            /**
             * The time at which this comment was initially published. Formatted as an RFC 3339 timestamp.
             */
            published: string; // date-time
            /**
             * Link to this comment resource.
             */
            selfLink: string;
            /**
             * The time at which this comment was last updated. Formatted as an RFC 3339 timestamp.
             */
            updated: string; // date-time
            /**
             * This comment's verb, indicating what action was performed. Possible values are:  
             * - "post" - Publish content to the stream.
             */
            verb: string;
        }
        interface ICommentFeed {
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The ID of this collection of comments.
             */
            id: string;
            /**
             * The comments in this page of results.
             */
            items: IComment[];
            /**
             * Identifies this resource as a collection of comments. Value: "plus#commentFeed".
             */
            kind: string;
            /**
             * Link to the next page of activities.
             */
            nextLink: string;
            /**
             * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
             */
            nextPageToken: string;
            /**
             * The title of this collection of comments.
             */
            title: string;
            /**
             * The time at which this collection of comments was last updated. Formatted as an RFC 3339 timestamp.
             */
            updated: string; // date-time
        }
        interface IPeopleFeed {
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The people in this page of results. Each item includes the id, displayName, image, and url for the person. To retrieve additional profile data, see the people.get method.
             */
            items: IPerson[];
            /**
             * Identifies this resource as a collection of people. Value: "plus#peopleFeed".
             */
            kind: string;
            /**
             * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
             */
            nextPageToken: string;
            /**
             * Link to this resource.
             */
            selfLink: string;
            /**
             * The title of this collection of people.
             */
            title: string;
            /**
             * The total number of people available in this list. The number of people in a response might be smaller due to paging. This might not be set for all collections.
             */
            totalItems: number; // int32
        }
        interface IPerson {
            /**
             * A short biography for this person.
             */
            aboutMe: string;
            /**
             * The age range of the person. Valid ranges are 17 or younger, 18 to 20, and 21 or older. Age is determined from the user's birthday using Western age reckoning.
             */
            ageRange: {
                max: number; // int32
                min: number; // int32
            };
            /**
             * The person's date of birth, represented as YYYY-MM-DD.
             */
            birthday: string;
            /**
             * The "bragging rights" line of this person.
             */
            braggingRights: string;
            /**
             * For followers who are visible, the number of people who have added this person or page to a circle.
             */
            circledByCount: number; // int32
            /**
             * The cover photo content.
             */
            cover: {
                coverInfo: {
                    leftImageOffset: number; // int32
                    topImageOffset: number; // int32
                };
                coverPhoto: {
                    height: number; // int32
                    url: string;
                    width: number; // int32
                };
                layout: string;
            };
            /**
             * (this field is not currently used)
             */
            currentLocation: string;
            /**
             * The name of this person, which is suitable for display.
             */
            displayName: string;
            /**
             * The hosted domain name for the user's Google Apps account. For instance, example.com. The plus.profile.emails.read or email scope is needed to get this domain name.
             */
            domain: string;
            /**
             * A list of email addresses that this person has, including their Google account email address, and the public verified email addresses on their Google+ profile. The plus.profile.emails.read scope is needed to retrieve these email addresses, or the email scope can be used to retrieve just the Google account email address.
             */
            emails: {
                type: string;
                value: string;
            }[];
            /**
             * ETag of this response for caching purposes.
             */
            etag: string;
            /**
             * The person's gender. Possible values include, but are not limited to, the following values:  
             * - "male" - Male gender. 
             * - "female" - Female gender. 
             * - "other" - Other.
             */
            gender: string;
            /**
             * The ID of this person.
             */
            id: string;
            /**
             * The representation of the person's profile photo.
             */
            image: {
                isDefault: boolean;
                url: string;
            };
            /**
             * Whether this user has signed up for Google+.
             */
            isPlusUser: boolean;
            /**
             * Identifies this resource as a person. Value: "plus#person".
             */
            kind: string;
            /**
             * The user's preferred language for rendering.
             */
            language: string;
            /**
             * An object representation of the individual components of a person's name.
             */
            name: {
                familyName: string;
                formatted: string;
                givenName: string;
                honorificPrefix: string;
                honorificSuffix: string;
                middleName: string;
            };
            /**
             * The nickname of this person.
             */
            nickname: string;
            /**
             * Type of person within Google+. Possible values include, but are not limited to, the following values:  
             * - "person" - represents an actual person. 
             * - "page" - represents a page.
             */
            objectType: string;
            /**
             * The occupation of this person.
             */
            occupation: string;
            /**
             * A list of current or past organizations with which this person is associated.
             */
            organizations: {
                department: string;
                description: string;
                endDate: string;
                location: string;
                name: string;
                primary: boolean;
                startDate: string;
                title: string;
                type: string;
            }[];
            /**
             * A list of places where this person has lived.
             */
            placesLived: {
                primary: boolean;
                value: string;
            }[];
            /**
             * If a Google+ Page, the number of people who have +1'd this page.
             */
            plusOneCount: number; // int32
            /**
             * The person's relationship status. Possible values include, but are not limited to, the following values:  
             * - "single" - Person is single. 
             * - "in_a_relationship" - Person is in a relationship. 
             * - "engaged" - Person is engaged. 
             * - "married" - Person is married. 
             * - "its_complicated" - The relationship is complicated. 
             * - "open_relationship" - Person is in an open relationship. 
             * - "widowed" - Person is widowed. 
             * - "in_domestic_partnership" - Person is in a domestic partnership. 
             * - "in_civil_union" - Person is in a civil union.
             */
            relationshipStatus: string;
            /**
             * The person's skills.
             */
            skills: string;
            /**
             * The brief description (tagline) of this person.
             */
            tagline: string;
            /**
             * The URL of this person's profile.
             */
            url: string;
            /**
             * A list of URLs for this person.
             */
            urls: {
                label: string;
                type: string;
                value: string;
            }[];
            /**
             * Whether the person or Google+ Page has been verified.
             */
            verified: boolean;
        }
        interface IPlace {
            /**
             * The physical address of the place.
             */
            address: {
                formatted: string;
            };
            /**
             * The display name of the place.
             */
            displayName: string;
            /**
             * The id of the place.
             */
            id: string;
            /**
             * Identifies this resource as a place. Value: "plus#place".
             */
            kind: string;
            /**
             * The position of the place.
             */
            position: {
                latitude: number; // double
                longitude: number; // double
            };
        }
        interface IPlusAclentryResource {
            /**
             * A descriptive name for this entry. Suitable for display.
             */
            displayName: string;
            /**
             * The ID of the entry. For entries of type "person" or "circle", this is the ID of the resource. For other types, this property is not set.
             */
            id: string;
            /**
             * The type of entry describing to whom access is granted. Possible values are:  
             * - "person" - Access to an individual. 
             * - "circle" - Access to members of a circle. 
             * - "myCircles" - Access to members of all the person's circles. 
             * - "extendedCircles" - Access to members of all the person's circles, plus all of the people in their circles. 
             * - "domain" - Access to members of the person's Google Apps domain. 
             * - "public" - Access to anyone on the web.
             */
            type: string;
        }
    }
}
