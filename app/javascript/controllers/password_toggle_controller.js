import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="password-toggle"
export default class extends Controller {
  static targets = ["input", "icon"];

  toggle() {
    const input = this.inputTarget;
    const icon = this.iconTarget;

    const isHidden = input.type === "password";

    input.type = isHidden ? "text" : "password";

    const eye = icon.dataset.eyeIcon;
    const eyeOff = icon.dataset.eyeOffIcon;

    icon.src = isHidden ? eyeOff : eye;
  }
}
