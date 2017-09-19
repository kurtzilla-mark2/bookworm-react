### animations
- added react-transition-group
- added in simple transition (opacity change) to notification when confirm email has been resent
- used a func component -> animations/Fade.js
- TODO room for improvement, universality

### added resend confirmation email
- enhanced the ConfirmEmailMessage component to facilitate

### more secure forgot password
- this was mostly accomplished on the API side
- we pass email to resend confirmation task
- some func names were renamed to avoid any future conflict with a "Reset Password" flow initiated from user portal/dashboard

