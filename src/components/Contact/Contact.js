import { ContactSocialImgLink,ContactContainer, ContactText, ContactSubtitle, ContactSocialImg, ContactSocial } from './Contact.style'
import ImagesExport from '../ImagesExport/ImagesExport'
const Contact = () => {
    return (
        <ContactContainer id="contact">
            <ContactText>
                Available for  opportunities
            </ContactText>
            <ContactSubtitle>
                Living, learning, & leveling up one day at a time.
            </ContactSubtitle>

            <ContactSocial>
                <ContactSocialImgLink href='https://github.com/dev99pedro' target="_blank">
                    <ContactSocialImg src={ImagesExport.LogoGitNav}>
                    </ContactSocialImg>
                </ContactSocialImgLink>

                <ContactSocialImgLink href='https://www.linkedin.com/in/pedro-ascari-85245a204/' style={{marginRight: ' 5px'}} target="_blank">
                    <ContactSocialImg src={ImagesExport.LogoLinkedinNav}>

                    </ContactSocialImg>
                </ContactSocialImgLink>

                <ContactSocialImgLink href='https://web.whatsapp.com/send?phone=5551995970289' target="_blank">
                    <ContactSocialImg src={ImagesExport.Whats}>

                    </ContactSocialImg>
                </ContactSocialImgLink>
            </ContactSocial>
        </ContactContainer>
    )
}


export default Contact