
import { makeStyles } from "@mui/styles"

import Footer from '../components/containers/Footer'
import CardInHomepage from './ContentContainer/ContentContainer'
import PrimarySearchAppBar from '../components/containers/NavBarAfterLogin'
import ButtonBases from '../components/presentations/TrendyCard'

import { useRouter } from 'next/router';

import { fireAuth } from '../services/firebase'

const useStyle = makeStyles({
    swipe: {
        position: "relative",
    },
    search: {
        position: "absolute",
        top: '45vh',
        zIndex: '1',
        marginLeft: '30px',
    },
    slogan: {
        position: "absolute",
        top: '25vh',
        zIndex: '1',
        textAlign: "center",
        textShadow: '2px 2px 1px black',
        display: "flex",
        // height: "10vh",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        color: "white",
        textSize: "25px",
    },
})




export default function New() {

    const classes = useStyle()
    const router = useRouter();
    fireAuth.onAuthStateChanged(user => {
        if (!user) {
            router.push('/')
        }
    })
    return (


        <div>
            <PrimarySearchAppBar />
            <ButtonBases></ButtonBases>
            <CardInHomepage />
            <Footer></Footer>
        </div>

    )




}

