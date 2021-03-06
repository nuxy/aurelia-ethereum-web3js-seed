import {inject}           from 'aurelia-dependency-injection';
import {DialogController} from 'aurelia-dialog';

@inject(DialogController)

/**
 * Dialog / Password.
 *
 * @requires DialogController
 */
export class DialogPassword {

  /**
   * @var {boolean} confirm
   */
  confirm = false;

  /**
   * @var {String} message
   */
  message = null;

  /**
   * Create a new instance of DialogController.
   *
   * @param {DialogController} DialogController
   *   DialogController instance.
   */
  constructor(DialogController) {
    this.dialog = DialogController;

    // Dialog properties.
    this.dialog.settings.centerHorizontalOnly = true;
  }

  /**
   * @inheritdoc
   */
  activate(params) {
    this.confirm = params.confirm;
    this.message = params.message;
  }
}
