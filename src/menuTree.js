import { Nodo } from "./Nodo";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import SecurityPrivacy from "./pages/SecurityPrivacy";
import Password from "./pages/Password";
import Notification from "./pages/Notification";
import Help from "./pages/Help";
import FAQs from "./pages/FAQs";
import SubmitTicket from "./pages/SubmitTicket";
import NetworkStatus from "./pages/NetworkStatus";
import Logout from "./pages/Logout";

const raiz = new Nodo({ title: "Root" }); // A dummy root node, adjust if your App component expects a specific root

const profileNode = new Nodo({ title: "Profile", link: "/profile", component: Profile });
raiz.agregarHijo(profileNode);

const messagesNode = new Nodo({ title: "Messages", link: "/messages", component: Messages });
raiz.agregarHijo(messagesNode);

const settingsNode = new Nodo({ title: "Settings", link: "/settings", component: Settings });
const accountNode = new Nodo({ title: "Account", link: "/settings/account", component: Account });
const profileSettingsNode = new Nodo({ title: "Profile", link: "/settings/profile", component: Profile }); // Assuming a different Profile page under settings
const securityPrivacyNode = new Nodo({ title: "Secrurity & Privacy", link: "/settings/security-privacy", component: SecurityPrivacy });
const passwordNode = new Nodo({ title: "Password", link: "/settings/password", component: Password });
const notificationNode = new Nodo({ title: "Notification", link: "/settings/notification", component: Notification });

settingsNode.agregarHijo(accountNode);
settingsNode.agregarHijo(profileSettingsNode);
settingsNode.agregarHijo(securityPrivacyNode);
settingsNode.agregarHijo(passwordNode);
settingsNode.agregarHijo(notificationNode);
raiz.agregarHijo(settingsNode);

const helpNode = new Nodo({ title: "Help", link: "/help", component: Help });
const faqsNode = new Nodo({ title: "FAQ's", link: "/help/faqs", component: FAQs });
const submitTicketNode = new Nodo({ title: "Submit a Ticket", link: "/help/submit-ticket", component: SubmitTicket });
const networkStatusNode = new Nodo({ title: "Network Status", link: "/help/network-status", component: NetworkStatus });

helpNode.agregarHijo(faqsNode);
helpNode.agregarHijo(submitTicketNode);
helpNode.agregarHijo(networkStatusNode);
raiz.agregarHijo(helpNode);

const logoutNode = new Nodo({ title: "Logout", link: "/logout", component: Logout });
raiz.agregarHijo(logoutNode);

export default raiz; 