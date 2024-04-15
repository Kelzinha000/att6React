import ButtonModal from "../ButtonModal/ButtonModal";



const ContainerModal = ({texteButton, textModal}) => {
    const [modal, setModal] = React.useState(false)

   return(
    <ButtonModal
    text={texteButton}
    textModal={setModal}
    modal={modal}/>
    
   )
}


export default ContainerModal;