var newContent = document.querySelector('.wysiwyg-content');
var newMail = document.querySelector('#email-content');
var menuLinks = document.querySelectorAll('#preview > .menu > a');
var previews = document.querySelectorAll('#preview > .content > div');
var image = document.querySelector('#img-link');
var newImage = document.querySelector('#new_image');
var title = document.querySelector('#title');
var newTitle = document.querySelector('#new_title');
var code = document.querySelector('#code');

function setNewMail() {
  var mailFormated = [];
  newContent.childNodes.forEach(function(element) {
    if (element.nodeName === "H1") {
      mailFormated.push('<p style="font-size:16px;background:#ffb923;padding:5px 20px;display:initial;color:#201c1c">' + element.innerText + '</p>');
    }
    if (element.nodeName === "P" && element.data !== "") {
      if (element.previousSibling && element.previousSibling.nodeName === "H1") {
        mailFormated.push('<p style="text-align:justify;border-top:2px solid #ffb923;margin-top:2px;padding-top:20px;color:#201c1c">' + element.innerHTML + '</p>');
      } else {
        mailFormated.push('<p style="text-align:justify;">' + element.innerHTML + '</p>');
      }
    }
  });
  newMail.innerHTML="";
  mailFormated.forEach(function(element) {
      newMail.insertAdjacentHTML('beforeend', element);
  });
}

function setHtml() {
  var start = '<!doctype html> <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"> <head> <title></title> <!--[if !mso]><!-- --> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!--<![endif]--> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <meta name="viewport" content="width=device-width,initial-scale=1"> <style type="text/css"> #outlook a {padding: 0 } .ReadMsgBody {width: 100% } .ExternalClass {width: 100% } .ExternalClass * {line-height: 100% } body {margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100% } table, td {border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0 } img {border: 0; height: auto; line-height: 100%; outline: 0; text-decoration: none; -ms-interpolation-mode: bicubic } p {display: block; margin: 13px 0 } </style> <!--[if !mso]><!--> <style type="text/css"> @media only screen and (max-width:480px) {@-ms-viewport {width: 320px } @viewport {width: 320px } } </style> <!--<![endif]--> <!--[if mso]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> <![endif]--> <!--[if lte mso 11]> <style type="text/css"> .outlook-group-fix {width:100% !important; } </style> <![endif]--> <!--[if !mso]><!--> <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css"> <style type="text/css"> @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700); </style> <!--<![endif]--> <style type="text/css"> @media only screen and (min-width:480px) {.mj-column-per-50 {width: 50%!important } .mj-column-px-300 {width: 300px!important } } </style> </head> <body style="background:#f7f7f7"> <div class="mj-container" style="background-color:#f7f7f7"> <!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;"> <tr> <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"> <![endif]--> <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0;width:100%" border="0"> <tbody> <tr> <td> <div style="margin:0 auto;max-width:600px"> <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0;width:100%" align="center" border="0"> <tbody> <tr> <td style="text-align:center;vertical-align:top;direction:ltr;font-size:0;padding:20px 0;padding-bottom:20px"> <!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0"> <tr> <td style="vertical-align:undefined;width:600px;"> <![endif]--> <div style="cursor:auto;color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;text-align:left"> <p align="center" style="font-size:.8em;margin:0">Si tu ne visualise pas bien cet email, merci de cliquer <a href="*|ARCHIVE|*" color="#201C1C">ici</a></p> </div> <!--[if mso | IE]> </td></tr></table> <![endif]--> </td> </tr> </tbody> </table> </div> </td> </tr> </tbody> </table> <!--[if mso | IE]> </td></tr></table> <![endif]--> <!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;"> <tr> <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"> <![endif]--> <div style="margin:0 auto;max-width:600px;background:#ffb923"> <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0;width:100%;background:#ffb923" align="center" border="0"> <tbody> <tr> <td style="text-align:center;vertical-align:top;direction:ltr;font-size:0;padding:20px 0;padding-bottom:0;padding-top:0"> <!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0"> <tr> <td style="vertical-align:top;width:300px;"> <![endif]--> <div class="mj-column-px-300 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%"> <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style="word-wrap:break-word;font-size:0;padding:10px 25px;padding-top:30px;padding-bottom:0;padding-right:25px;padding-left:25px" align="left"> <div style="cursor:auto;color:#201c1c;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:40px;line-height:22px;text-align:left"> <p style="font-size:30px">WeeklySounds</p>';
  var partOne = '<p style="font-size:13px">Ta dose de découvertes musicales pour la semaines mon ami !</p> </div> </td> </tr> <tr> <td style="word-wrap:break-word;font-size:0;padding:15px 30px;padding-bottom:40px;padding-right:25px;padding-left:25px" align="center"> <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:separate" align="center" border="0"> <tbody> <tr> <td style="border:none;border-radius:3px;color:#201c1c;cursor:auto;padding:10px 25px" align="center" valign="middle" bgcolor="#fff"><a href="http://www.weeklysounds.com?utm_source=mailchimp&utm_medium=email&utm_campaign=weeklysounds" style="text-decoration:none;background:#fff;color:#201c1c;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:15px;font-weight:400;line-height:120%;text-transform:none;margin:0" target="_blank">Écouter maintenant</a></td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </div> <!--[if mso | IE]> </td><td style="vertical-align:top;width:300px;"> <![endif]--> <div class="mj-column-px-300 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%"> <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style="word-wrap:break-word;font-size:0;padding:10px 25px;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px" align="center"> <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0" align="center" border="0"> <tbody> <tr> <td style="width:280px">';
  var partTwo = '</td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </div> <!--[if mso | IE]> </td></tr></table> <![endif]--> </td> </tr> </tbody> </table> </div> <!--[if mso | IE]> </td></tr></table> <![endif]--> <!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;"> <tr> <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"> <![endif]--> <div style="margin:0 auto;max-width:600px;background:#fff"> <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0;width:100%;background:#fff" align="center" border="0"> <tbody> <tr> <td style="text-align:center;vertical-align:top;direction:ltr;font-size:0;padding:30px"> <!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0"> <tr> <td style="vertical-align:undefined;width:600px;"> <![endif]-->';
  var end = '<!--[if mso | IE]> </td></tr></table> <![endif]--> </td> </tr> </tbody> </table> </div> <!--[if mso | IE]> </td></tr></table> <![endif]--> <!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;"> <tr> <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"> <![endif]--> <div style="margin:0 auto;max-width:600px;background:#201c1c"> <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0;width:100%;background:#201c1c" align="center" border="0"> <tbody> <tr> <td style="text-align:center;vertical-align:top;direction:ltr;font-size:0;padding:20px 0;padding-bottom:0;padding-top:0"> <!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0"> <tr> <td style="vertical-align:top;width:300px;"> <![endif]--> <div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%"> <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style="word-wrap:break-word;font-size:0;padding:10px 25px;padding-top:10px;padding-bottom:0;padding-right:0;padding-left:20px" align="left"> <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0" align="left" border="0"> <tbody> <tr> <td style="width:180px"> <a href="http://www.weeklysounds.com?utm_source=mailchimp&utm_medium=email&utm_campaign=weeklysounds"> <img alt="WeeklySounds" height="auto" src="https://gallery.mailchimp.com/0509b370e1f445b925c43353c/images/81c23038-2ba1-4a2d-9e8d-40b6fcc760d0.png" style="border:none;border-radius:0;display:block;font-size:13px;outline:0;text-decoration:none;width:100%;height:auto" width="180"> </a> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </div> <!--[if mso | IE]> </td><td style="vertical-align:top;width:300px;"> <![endif]--> <div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%"> <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style="word-wrap:break-word;font-size:0;padding:10px 25px;padding-top:0;padding-bottom:0;padding-right:25px;padding-left:25px" align="right"> <div style="cursor:auto;color:#fff;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;text-align:right"> <p><a href="http://www.weeklysounds.com?utm_source=mailchimp&utm_medium=email&utm_campaign=weeklysounds" style="text-decoration:none;color:inherit">www.weeklysounds.com</a></p> </div> </td> </tr> </tbody> </table> </div> <!--[if mso | IE]> </td></tr></table> <![endif]--> </td> </tr> </tbody> </table> </div> <!--[if mso | IE]> </td></tr></table> <![endif]--> <!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;"> <tr> <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"> <![endif]--> <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0;width:100%" border="0"> <tbody> <tr> <td> <div style="margin:0 auto;max-width:600px"> <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0;width:100%" align="center" border="0"> <tbody> <tr> <td style="text-align:center;vertical-align:top;direction:ltr;font-size:0;padding:20px 0;padding-bottom:20px"> <!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0"> <tr> <td style="vertical-align:undefined;width:600px;"> <![endif]--> <div style="cursor:auto;color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;text-align:left"> <p align="center" style="font-size:.8em;margin:0">Clique <a href="*|UNSUB|*" color="#201C1C">ici</a> pour te désabonner de la newsletter :\'(</p> </div> <!--[if mso | IE]> </td></tr></table> <![endif]--> </td> </tr> </tbody> </table> </div> </td> </tr> </tbody> </table> <!--[if mso | IE]> </td></tr></table> <![endif]--> </div> </body> </html>';
  code.innerHTML = start + newTitle.outerHTML + partOne + newImage.outerHTML + partTwo + newMail.outerHTML + end;
}

function togglePreview() {
  setHtml();
  var click = this;
  previews.forEach(function(preview) {
    preview.style.display = "none";
    if (preview.classList.value === click.dataset.preview) {
      preview.style.display = "block";
    }
  });
  menuLinks.forEach(function(link) {
    link.classList.remove('selected');
  });
  click.classList.add('selected');
}

if (newContent) {
  newContent.addEventListener('DOMSubtreeModified', setNewMail)
}

if (menuLinks) {
  menuLinks.forEach(function(link) {
    link.addEventListener('click', togglePreview)
  });
}

if (image) {
  image.addEventListener('change', function() {
    newImage.src = this.value;
  });
}

if (title) {
  title.addEventListener('change', function() {
    newTitle.innerText = this.value;
  });
}
