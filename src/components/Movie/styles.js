import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    movie: {
        padding: "10px"
    },
    title: {
        color: theme.palette.text.primary,
        width: '200px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        marginTop: '10px',
        marginBottom: 0,
        textAlign: 'center'
    },
    link: {
        alignItems: 'center',
        fontWeight: 'bolder',
        textDecoration: 'none',
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column'
        },
        '&:hover': {
            cursor: 'pointer',
        }
    },
    image: {
        borderRadius: '20px',
        height: '300px',
        marginBottom: '10px',
        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.05)'
        }
    }

}))