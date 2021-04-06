import React, { useEffect } from 'react'
import { run } from "tripetto-runner-chat";
import Services from "tripetto-services";

const { definition, styles, l10n, locale, translations, attachments, onSubmit } = Services.init({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNGxPWVhwLzZydUcycnZzTjJPbkxzNk5KWlBCWVRzRUVQQjYxOW03ZHIvQT0iLCJkZWZpbml0aW9uIjoiUWxaWVZyTGMwY2tpUlNZTnFiNGdXL21tSElIWWdJbGJDUVlEbXl5ak5iTT0iLCJ0eXBlIjoiY29sbGVjdCJ9.os7274L_WpKoJj2o6jNgfVUSbFN-WtBmS3FOzR_TfzI" });

const obj = {
  "fingerprint": "1948e440a73fc032774d906bb127a5af888617a8e383631699a4eca85ba5c8a1",
  "stencil": "9893dbdebcee0c5160ded17d2a4536cf9d28c50f02a026d21c81d8eeee69a2e1",
  "fields": [
      {
          "name": "Initial value of 49€",
          "type": "tripetto-block-calculator",
          "version": "1.3.0",
          "node": {
              "id": "f2cdbc01b0b028890a7f60bd9f39a3339585c06f00f0ab3af8a118fd0cd944fe",
              "key": "9912c2b1745bb8e2d4cf567670db5a3dbddfa359e13ecd3e5a12dc78ed0a9ccd",
              "context": "*"
          },
          "slot": "calculator",
          "datatype": "numeric",
          "string": "49",
          "value": 49,
          "modified": false,
          "time": 1617722841206,
          "key": "7df5fb2a0082ce1992546ce8328969d45e897bb6007c085c9ed4d78510fc9dc1"
      },
      {
          "name": "Mais avant de commencer, dites-moi comment je dois vous appeler.",
          "type": "tripetto-block-text",
          "version": "4.2.0",
          "node": {
              "id": "f03a572dbdada5317e43d9be46a65e80a0fb2e71872c0fa48c5ef2fc3746dfb2",
              "key": "adcfa8ef22d1dee5d2fd5119496885a40d8133502ab4da0a047aa7c85489cd10",
              "context": "*"
          },
          "slot": "value",
          "datatype": "text",
          "string": "Yvens",
          "value": "Yvens",
          "modified": false,
          "time": 1617722845573,
          "key": "98b46c04ce7e73a85d54d963f99addf7a9b4796516857c9f570d26281ee895d3"
      },
      {
          "name": "Parfait ___, quel est le modèle de votre voiture ?",
          "type": "tripetto-block-picture-choice",
          "version": "2.2.0",
          "node": {
              "id": "a4b000dd7b0a58912d4b996d704ac77f8f43b7287a0bff9b1d28e9f8630c5aaa",
              "key": "9f7f09cbb68c662de6004390491c96e3ff22b4c0d210e9b42fe16e8d56a1635d",
              "context": "*"
          },
          "slot": "choice",
          "datatype": "string",
          "string": "Citadine (Twingo, A1, mini, 208)",
          "value": "Citadine (Twingo, A1, mini, 208)",
          "modified": false,
          "reference": "5f32ba8c0250a20be4287826c4fe9f25b2801178a8809debb724d7d81429118d",
          "time": 1617722850119,
          "key": "ba03a948224ca48e0caafaa3d3d9f49493549a64c36fcfab9e8ee1c8366fef28"
      },
      {
          "name": "Valeur forfait après choix du véhicule",
          "type": "tripetto-block-calculator",
          "version": "1.3.0",
          "node": {
              "id": "e856f58bea2430a2315648b433344e67781d7b601f9044950ee9940480143d8e",
              "key": "55f7b6893a1f30ccdec4daa8c69aeb1a3800ba9bf2b625109ee1bddfd636a8c3",
              "context": "*"
          },
          "slot": "calculator",
          "datatype": "numeric",
          "string": "49",
          "value": 49,
          "modified": false,
          "time": 1617722841246,
          "key": "e396e009d2235aba19c45f7038e0342b6b36e7ffde9b60b1133c84a9732234dd"
      },
      {
          "name": "Voulez vous prendre des options ? Comme le shampoing d'un siège ou de la moquette par exemple, très utile si vous avez des tâches ou une odeur persistante.",
          "type": "tripetto-block-yes-no",
          "version": "3.1.0",
          "node": {
              "id": "84ad045bdd8d8423d80cef346a01edcacf94fe6e0e1b10f4d998a4142c923e7e",
              "key": "b408940c2c80bc96bd478168a308a633e8fd1413d132c9cba29bbd7b140a8684",
              "context": "*"
          },
          "slot": "answer",
          "datatype": "string",
          "string": "Yes",
          "value": "Yes",
          "modified": false,
          "reference": "yes",
          "time": 1617722857664,
          "key": "8f34c0f97958371c210b37b4328f717a9f965ce1e4bc6f5f4c18dd6ebd8e3d4c"
      },
      {
          "name": "Supplément véhicule très sale (19€)",
          "type": "tripetto-block-picture-choice",
          "version": "2.2.0",
          "node": {
              "id": "df41aec7d5ed0956148469c6d8767ef642ae23dd12d582537d902a3666d1d62e",
              "key": "87b9c3db74d36c096a5d9a63b4af4b035d68f96d752311c1188b35bb9bffdb9d",
              "context": "*"
          },
          "slot": "469495c50ec5cf226bc17e2f5af4aaa8c8247c56f60ca8bdca985a0e96c66738",
          "datatype": "boolean",
          "string": "Not selected",
          "value": false,
          "modified": false,
          "time": 1617722859613,
          "key": "c1683073ed2f2d13ea00bd38d50610c137cfe56dc00184409e5f98e222103c34"
      },
      {
          "name": "Shampoing siège tissu (9€/siège)",
          "type": "tripetto-block-picture-choice",
          "version": "2.2.0",
          "node": {
              "id": "df41aec7d5ed0956148469c6d8767ef642ae23dd12d582537d902a3666d1d62e",
              "key": "87b9c3db74d36c096a5d9a63b4af4b035d68f96d752311c1188b35bb9bffdb9d",
              "context": "*"
          },
          "slot": "e375362d1ce7c4d6276cdd7194b7b932669bad0e1ff4165deabe76ef66fec197",
          "datatype": "boolean",
          "string": "Not selected",
          "value": false,
          "modified": false,
          "time": 1617722859613,
          "key": "47ad43f42422f8df6edadf6700770fc8a024addab154ad0606efc1fbfde1513f"
      },
      {
          "name": "Shampoing siège cuir + soin (15€/siège)",
          "type": "tripetto-block-picture-choice",
          "version": "2.2.0",
          "node": {
              "id": "df41aec7d5ed0956148469c6d8767ef642ae23dd12d582537d902a3666d1d62e",
              "key": "87b9c3db74d36c096a5d9a63b4af4b035d68f96d752311c1188b35bb9bffdb9d",
              "context": "*"
          },
          "slot": "514b79f2032a189ba24a1c73b23c6d4460f3900f9f5afc92843aaec83aec96c4",
          "datatype": "boolean",
          "string": "Not selected",
          "value": false,
          "modified": false,
          "time": 1617722859614,
          "key": "1238f667f124464ddb08c50a2afb63f1ef645d700613807772cac693ce00eb92"
      },
      {
          "name": "Shampoing tapis (5€/tapis)",
          "type": "tripetto-block-picture-choice",
          "version": "2.2.0",
          "node": {
              "id": "df41aec7d5ed0956148469c6d8767ef642ae23dd12d582537d902a3666d1d62e",
              "key": "87b9c3db74d36c096a5d9a63b4af4b035d68f96d752311c1188b35bb9bffdb9d",
              "context": "*"
          },
          "slot": "83700a25b3a35b675e2b15eada8dc8cd9391a37a109321070a197051bcd98225",
          "datatype": "boolean",
          "string": "Not selected",
          "value": false,
          "modified": false,
          "time": 1617722859614,
          "key": "035f73a4e51d6868a4917260972e794a04ccdfaab32e3e82eb865db0af775093"
      },
      {
          "name": "Shampoing coffre (19€)",
          "type": "tripetto-block-picture-choice",
          "version": "2.2.0",
          "node": {
              "id": "df41aec7d5ed0956148469c6d8767ef642ae23dd12d582537d902a3666d1d62e",
              "key": "87b9c3db74d36c096a5d9a63b4af4b035d68f96d752311c1188b35bb9bffdb9d",
              "context": "*"
          },
          "slot": "8b61871cd5343def8e42cfd501e8a34ab83f49b94ac8cf2ee1826dd0829c95c3",
          "datatype": "boolean",
          "string": "Selected",
          "value": true,
          "modified": false,
          "time": 1617722861758,
          "key": "976fb60551cd6be5f96b2e2656419536faa91f1ba940984dd4219dd1ff9ef41a"
      },
      {
          "name": "Shampoing moquettes (25€)",
          "type": "tripetto-block-picture-choice",
          "version": "2.2.0",
          "node": {
              "id": "df41aec7d5ed0956148469c6d8767ef642ae23dd12d582537d902a3666d1d62e",
              "key": "87b9c3db74d36c096a5d9a63b4af4b035d68f96d752311c1188b35bb9bffdb9d",
              "context": "*"
          },
          "slot": "6f053f6c254eac431301cb62952a0e5ea1b78f96dd5e117b441cac29f1aa02b5",
          "datatype": "boolean",
          "string": "Not selected",
          "value": false,
          "modified": false,
          "time": 1617722859614,
          "key": "f165b3f4610090ae05be64274bd31fd797cfab7235b9b3d3ff536cd2be697aaa"
      },
      {
          "name": "Nettoyage plafonnier (30€)",
          "type": "tripetto-block-picture-choice",
          "version": "2.2.0",
          "node": {
              "id": "df41aec7d5ed0956148469c6d8767ef642ae23dd12d582537d902a3666d1d62e",
              "key": "87b9c3db74d36c096a5d9a63b4af4b035d68f96d752311c1188b35bb9bffdb9d",
              "context": "*"
          },
          "slot": "8c485700e89c4f6b9d055d017630217f4f97574320672422045064b9adb5a080",
          "datatype": "boolean",
          "string": "Not selected",
          "value": false,
          "modified": false,
          "time": 1617722859614,
          "key": "5c8a0ee4be4bd6181836f920ab5cc0ce8182bd5d3e45d7597564d6c975647c3b"
      },
      {
          "name": "Pas besoin d'options finalement",
          "type": "tripetto-block-picture-choice",
          "version": "2.2.0",
          "node": {
              "id": "df41aec7d5ed0956148469c6d8767ef642ae23dd12d582537d902a3666d1d62e",
              "key": "87b9c3db74d36c096a5d9a63b4af4b035d68f96d752311c1188b35bb9bffdb9d",
              "context": "*"
          },
          "slot": "725457dbd90efb8f59e56a515542e89af1e6d56047716c202e94cd1d4b79e513",
          "datatype": "boolean",
          "string": "Not selected",
          "value": false,
          "modified": false,
          "time": 1617722859614,
          "key": "5c6bc011147f14bad8c3ddd4c32642a7676affbfaad3b13c01243dbd537533d1"
      },
      {
          "name": "Combien de ___ voudriez vous shampouiner ?",
          "type": "tripetto-block-number",
          "version": "6.1.0",
          "node": {
              "id": "55852dcae2f4f1c14107ebc898850e7a2c9f0b1321c61af6380d9dfd98fe4361",
              "key": "c00a50718e9a2ba420d2c3cfd939f296ae3ae756b3f5c91501f50632b894294e",
              "context": "*"
          },
          "slot": "number",
          "datatype": "numeric",
          "string": "",
          "modified": false,
          "key": "ceb04f1b9fb66342fd173017290aa89e4b3a277f2ebe0bd9373ded24e68f14a9"
      },
      {
          "name": "Sous total par produit",
          "type": "tripetto-block-calculator",
          "version": "1.3.0",
          "node": {
              "id": "4ff7baf2fa09eaf3ea002cdee5804a3abbb2571e159967b09de90ee35f7b01eb",
              "key": "6c5733a0b7a6d5d4c71309f6883ed0c33aaf439d3445ce82cd745dbb05b33541",
              "context": "*"
          },
          "slot": "calculator",
          "datatype": "numeric",
          "string": "",
          "modified": false,
          "key": "678bc656fc20daa84c4cc38b444c2a7ddb2715514055cc8a970f73dc622399a1"
      },
      {
          "name": "Total des options + forfait",
          "type": "tripetto-block-calculator",
          "version": "1.3.0",
          "node": {
              "id": "c944c260299dc6a8ae1323cc544e60c4691c29692214aca7f2062f3d012be839",
              "key": "30c2d733cf8b75a4c89a13c72c2dcd4c3f150d44c8a5f33d37b59ae13cf9473f",
              "context": "*"
          },
          "slot": "calculator",
          "datatype": "numeric",
          "string": "",
          "modified": false,
          "key": "02a8dc897a5dd486344c8f746a26349114b26a40cdad4a4c31c3698e5cf435e0"
      },
      {
          "name": "forfait + option solo item",
          "type": "tripetto-block-calculator",
          "version": "1.3.0",
          "node": {
              "id": "fd5329860f6ad87ca8fa777761b510a64e6181895a55fc32e4b5d22844590dbf",
              "key": "a9162ef7bc41892d0404a84309303642190ac297084a2364ac5ab84a1d939850",
              "context": "*"
          },
          "slot": "calculator",
          "datatype": "numeric",
          "string": "68",
          "value": 68,
          "modified": false,
          "time": 1617722861765,
          "key": "4612db5ad63d6fab66d39c6d099131bf4ed7dafb315ee8fde13e368427d05905"
      },
      {
          "name": "Voulez vous prendre un rendez-vous ? (Il vous suffit d'avoir une prise à disposition, nous avons une rallonge de 40m)",
          "type": "tripetto-block-yes-no",
          "version": "3.1.0",
          "node": {
              "id": "9514bed8abd3a4c475cd2bfc8160f668907517c65b601aec26af033f1966e372",
              "key": "5ffe7de53d2c89e1d1162a2c17e9b62e5b147e50142e90f36ba204862c686ff8",
              "context": "*"
          },
          "slot": "answer",
          "datatype": "string",
          "string": "Yes",
          "value": "Yes",
          "modified": false,
          "reference": "yes",
          "time": 1617722867887,
          "key": "d20d1f34d2d8fa54abdc51620d51e6dd5f1be8e3d61cacdf74b24b1370a9d354"
      },
      {
          "name": "Alors dites moi, où habitez vous ? Vous serez ensuite redirigé vers la prise de RDV",
          "type": "tripetto-block-text",
          "version": "4.2.0",
          "node": {
              "id": "4831736b97865f65575d25d12584c13c3da5cda6a4670f59871f87a243103107",
              "key": "6206339ea22f6ea4f30d36a30aaf42d9478dba522689b8a2597fcc41f8730c6c",
              "context": "*"
          },
          "slot": "value",
          "datatype": "text",
          "string": "fdfs",
          "value": "fdfs",
          "modified": false,
          "time": 1617722871904,
          "key": "9f1fa278709bc69d67eadd7104121a519c96f13da333c3bcee32a7546ebc89fd"
      },
      {
          "name": "Pourriez vous me dire pourquoi si ce n'est pas trop indiscret ? Merci d'avance 🤗",
          "type": "tripetto-block-textarea",
          "version": "4.1.0",
          "node": {
              "id": "381a33d32c176494762a6cde16f90499656a6a99a9bb3c1d64990511bb4c1cd5",
              "key": "05908a0c1ea73a2c7051a3b270d612166267339a1054db77bf16adceae5fe53a",
              "context": "*"
          },
          "slot": "value",
          "datatype": "text",
          "string": "",
          "modified": false,
          "key": "36467351bb306295882511deef8c7d8497b93f447105f44cbb86067e1688f653"
      }
  ]
}
function Devis() {
  // document.getElementById('tripetto')
  const obj2 = obj.fields.filter(val => val.value !== false);
  console.log('obj2:', obj2)
  useEffect(() => run({
    element: document.getElementById('tripetto'), /* Or supply your own element here */
    definition,
    styles,
    l10n,
    locale,
    translations,
    attachments,
    onSubmit
}), []);
  return (
    <div className='devis-container'>
      <div id="tripetto"></div>
    </div>
  )
}

export default Devis;
