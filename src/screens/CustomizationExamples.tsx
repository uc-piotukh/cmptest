import { Image } from 'react-native';
import {
    BannerLogo, BannerSettings, ButtonLayout,
    ButtonType,
    FirstLayerStyleSettings,
    HeaderImageSettings,
    LegalLinksSettings,
    SecondLayerStyleSettings,
    SectionAlignment,
    UsercentricsLayout
} from '@usercentrics/react-native-sdk';
  

//first example: with showCloseButton
    export const customizationExampleOne: BannerSettings = {
        firstLayerStyleSettings: {
            layout: UsercentricsLayout.popupCenter,
        },
        secondLayerStyleSettings: {
            showCloseButton: true,
        },
        generalStyleSettings: {
            
            links: LegalLinksSettings.both,
        }
    }
    
    //second example: no showCloseButton
    export const customizationExampleTwo: BannerSettings = {
        firstLayerStyleSettings: {
            layout: UsercentricsLayout.full,
        },
        secondLayerStyleSettings: {
            buttonLayout: ButtonLayout.row(
                [
                    {
                        buttonType: ButtonType.acceptAll,
                        cornerRadius: 30.0
                    }
                ]
            )

        },

        generalStyleSettings: {
            linkColorHex: "FFFFFF",
        }
    }



    
    