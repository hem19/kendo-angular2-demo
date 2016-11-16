export class LogInErrorsResource {
    public static get UserNotFound(): string { return 'The specified user was not found'; }
    public static get BlankUserName(): string { return 'Please provide a user name'; }
    public static get CannotConnectToInSiteServerDatabase(): string { return 'Unable to connect to the InSite Server database'; }
    public static get CannotCreateSessionInformation(): string { return 'Unable to create user session information'; }
    public static get CannotSaveSessionInformationToDatabase(): string { return 'Unable to save user session information in the InSite Server Database'; }
    public static get InSiteServer(): string { return 'InSite Server error'; }
    public static get InSiteServerNotFound(): string { return 'InSite Server was not found'; }
    public static get InvalidPassword(): string { return 'The password provided is invalid'; }
    public static get PasswordIsRequiredForThisUser(): string { return 'A password is required for this user'; }
    public static get TheAccountIsNotAUserAccount(): string { return 'The Account specified is not a user account'; }
    public static get UserInformationNotFound(): string { return 'User information was not found'; }
    public static get UserIsLockedOut(): string { return 'The specified user is currently locked out'; }
    public static get UserIsNotAllowedToUseSso(): string { return 'The specified user may not use SSO'; }
}