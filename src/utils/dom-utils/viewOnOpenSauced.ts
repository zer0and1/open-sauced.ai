import { GITHUB_PROFILE_USER_PROFILE_EDITABLE_AREA_SELECTOR } from "../../constants";
import { ViewOnOpenSaucedButton } from "../../content-scripts/components/ViewOnOpenSaucedButton/ViewOnOpenSaucedButton";

const injectViewOnOpenSaucedButton = (username: string) => {
    if (document.getElementById("view-on-opensauced-button")) {
        return;
    }

    const viewOnOpenSaucedButton = ViewOnOpenSaucedButton(username);

    const userEditableArea = document.getElementsByClassName(
        GITHUB_PROFILE_USER_PROFILE_EDITABLE_AREA_SELECTOR,
    );
    const editableAreaElement = userEditableArea[0];

    editableAreaElement.parentNode?.insertBefore(viewOnOpenSaucedButton, editableAreaElement);
};

export default injectViewOnOpenSaucedButton;
