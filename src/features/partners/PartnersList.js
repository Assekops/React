
import { Col } from "reactstrap";
import Partner from "./Partner";
import { selectAllPartners } from './partnersSlice.js';
import { useSelector } from "react-redux";

const PartnersList = () => {

    const partners = useSelector(selectAllPartners);
    return (
        <Col className='mt-4'>{partners.map((partner) => {
            return <div className='d-flex mb-5' key={partner.id}>
                <Partner partner={partner} />
            </div>
        })}
        </Col>
    );
};
export default PartnersList;

