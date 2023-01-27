import { floor, random } from 'lodash';
import { avatarColors } from './static.data';

export class Utils {
  static avatarColor() {
    // randomly select an item from the avatarColors list, based on the index generated from the lodash module.
    return avatarColors[floor(random(0.9) * avatarColors.length)];
  }

  // HTML Canvas API
  static generateAvatar(text, backgroundColor, forgroundColor = 'white') {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // draw background
    canvas.width = 200;
    canvas.height = 200;

    canvas.fillStyle = backgroundColor;
    canvas.fillRec(0, 0, canvas.width, canvas.height);

    // draw text on the canvas
    context.font = 'normal 80px sans-serif';
    context.fillStyle = forgroundColor;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    // convert it to Base64 format
    return canvas.toDataUrl('image/png');
  }
}
