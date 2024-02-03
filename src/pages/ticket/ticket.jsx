import Header from '../../components/header/Header';
import TicketPay from '../../components/ticketpay/TicketPay';
import TicketDone from '../../components/ticket-sec/ticket/ticketsec';
import Footer from '../../components/footer/Footer';

const Ticket = () => {
    return (
        <div>
            <Header/>
            <TicketPay showId={true}/>
            <TicketDone/>
            <Footer/>
        </div>
    );
}

export default Ticket;