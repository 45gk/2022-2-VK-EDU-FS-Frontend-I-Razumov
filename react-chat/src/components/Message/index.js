import DoneAllIcon from '@mui/icons-material/DoneAll';
import DoneIcon from '@mui/icons-material/Done';


export function ifMessageFromUser(flag, status_class, icon_class, status) {
    if (flag) {
        if (status === 'read')
            return <span className={status_class}><DoneAllIcon className={icon_class}/></span>;
        else if (status === 'sent') {
            return <span className={status_class}><DoneIcon className={icon_class}/></span>;
        } else {
            return <span className={status_class}><DoneIcon className={icon_class}/></span>;
        }
    }
}
