/* ==========================================================================
   DÉCOUVRASSUR - ARTICLES DE BLOG + MODAL
   ========================================================================== */

const ARTICLES = [
  {
    img: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=1200&h=600&fit=crop&auto=format',
    category: 'Assurance vie',
    title: "Combien d'assurance vie faut-il réellement?",
    teaser: "La règle des 7 à 10 fois votre revenu annuel tient-elle vraiment la route au Québec? Analyse détaillée par situation familiale.",
    readtime: '5',
    cta: { url: 'https://api.leadconnectorhq.com/widget/survey/QPAciL4BPFpnyaazzwZT', text: 'Obtenir ma soumission vie' },
    content: `
      <p>La question revient constamment : <strong>combien d'assurance vie dois-je souscrire?</strong> La fameuse règle "7 à 10 fois votre salaire annuel" circule partout, mais elle est souvent inadaptée à la réalité québécoise. Voici comment calculer le bon montant selon votre situation.</p>
      <h3>La règle des 7-10x : utile, mais simpliste</h3>
      <p>Cette règle populaire recommande une couverture égale à 7 à 10 fois votre revenu brut annuel. Pour un Québécois gagnant 75 000 $, cela donnerait entre 525 000 $ et 750 000 $. Le problème? Elle ignore plusieurs facteurs cruciaux : votre hypothèque, l'âge de vos enfants, vos dettes existantes, et le filet social québécois.</p>
      <h3>La méthode DIME : plus précise</h3>
      <p>La méthode DIME (Dettes, Income, Mortgage, Éducation) permet un calcul beaucoup plus personnalisé :</p>
      <ul>
        <li><strong>Dettes</strong> : Cartes de crédit, marges, prêts autos, prêts personnels</li>
        <li><strong>Income (revenu)</strong> : 10 ans de revenu net pour remplacer vos apports financiers</li>
        <li><strong>Mortgage (hypothèque)</strong> : Solde restant à payer sur votre résidence</li>
        <li><strong>Éducation</strong> : Environ 60 000 $ à 80 000 $ par enfant pour les études post-secondaires au Québec</li>
      </ul>
      <div class="callout"><p><strong>Exemple concret :</strong> Un couple avec 2 enfants, 250 000 $ d'hypothèque restante, 20 000 $ de dettes et un revenu de 70 000 $ devrait viser environ <strong>1 000 000 $ à 1 200 000 $</strong> de couverture. Bien plus que les 490 000 $ que donnerait la règle des 7x.</p></div>
      <h3>Particularités québécoises à considérer</h3>
      <p>Au Québec, le régime public est généreux comparativement au reste du Canada. Le Régime des rentes du Québec (RRQ) verse une rente de conjoint survivant et une rente d'orphelin. En 2025, cela peut atteindre 800 à 1 200 $ par mois pour le conjoint survivant, selon le profil du défunt. Ne négligez pas non plus :</p>
      <ul>
        <li>Les prestations au conjoint survivant de la SAAQ (si décès par accident)</li>
        <li>Le régime d'épargne retraite individuel (REER) qui continue à générer des revenus</li>
        <li>Les assurances collectives employeur (souvent 1 à 2 fois le salaire)</li>
      </ul>
      <h3>Le bon réflexe : audit complet</h3>
      <p>Plutôt que d'appliquer une formule générique, demandez à un courtier certifié AMF de réaliser une <strong>analyse de besoins complète</strong>. Cette évaluation gratuite prend en compte votre situation familiale, votre valeur nette, vos objectifs successoraux et les protections existantes.</p>
      <div class="tip"><p><strong>Conseil d'expert :</strong> Comparez toujours au moins 3 soumissions. Pour le même profil, les écarts entre Manuvie, Canada Vie, iA Groupe financier, Beneva et Desjardins peuvent atteindre <strong>40 % à 60 %</strong> pour une police temporaire 20 ans équivalente.</p></div>
      <h3>Temporaire ou permanente?</h3>
      <p>Pour la majorité des Québécois, une <strong>assurance temporaire 20 ou 25 ans</strong> suffit amplement : elle couvre les années où vous avez le plus de responsabilités (hypothèque, enfants à charge). Coût : 30 à 70 $/mois pour 500 000 $ à 35 ans. La permanente (vie entière, universelle) a sa place dans des stratégies fiscales spécifiques, notamment pour les entrepreneurs avec société par actions.</p>
    `
  },
  {
    img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop&auto=format',
    category: 'Assurance auto',
    title: "10 façons d'économiser sur votre assurance auto en 2025",
    teaser: "Des trucs concrets pour réduire votre prime sans réduire votre protection. Rabais méconnus, regroupements, bonifications et plus.",
    readtime: '7',
    cta: { url: 'https://api.leadconnectorhq.com/widget/survey/npJDYq7MF59kqoyPOtbS', text: 'Obtenir ma soumission auto' },
    content: `
      <p>Avec la prime moyenne qui a bondi de <strong>38 % depuis 2020</strong> au Québec, chaque dollar économisé compte. Voici 10 stratégies concrètes pour réduire votre prime sans rogner sur votre protection.</p>
      <h3>1. Regroupez auto + habitation</h3>
      <p>C'est le rabais le plus universel : <strong>10 à 20 %</strong> chez la plupart des assureurs québécois. Desjardins, Beneva, Intact et iA offrent tous des programmes combinés avantageux. Sur une prime auto de 1 200 $, c'est 120 à 240 $ par année, sans effort.</p>
      <h3>2. Augmentez votre franchise</h3>
      <p>Passer d'une franchise de 250 $ à 1 000 $ peut réduire votre prime de <strong>15 à 25 %</strong>. La logique : si vous avez un coussin de 1 000 $ disponible en cas d'accident, vous économisez chaque année sans réclamation.</p>
      <div class="callout"><p><strong>Calcul simple :</strong> Si l'économie annuelle est de 200 $ et que vous passez 5 ans sans réclamation, vous avez économisé 1 000 $ — exactement ce que vous devriez payer en cas d'accident.</p></div>
      <h3>3. Utilisez la télématique (Ajusto, automérite, Ma conduite)</h3>
      <p>Les programmes basés sur les habitudes de conduite peuvent offrir jusqu'à <strong>25 % de rabais</strong> pour les bons conducteurs. Desjardins Ajusto, Belair automérite, Intact Ma conduite : une application mobile analyse vos freinages, accélérations et heures de conduite.</p>
      <h3>4. Magasinez annuellement</h3>
      <p>Les assureurs ajustent leurs tarifs selon la sinistralité. Un assureur qui était le moins cher l'an dernier peut devenir le plus cher cette année. <strong>Comparez 30 jours avant chaque renouvellement</strong> — économie moyenne : 200 à 500 $/an.</p>
      <h3>5. Déclarez le kilométrage réel</h3>
      <p>Depuis la généralisation du télétravail, de nombreux Québécois roulent moins. Si vous faites moins de 12 000 km par an, déclarez-le : plusieurs assureurs offrent des rabais de <strong>5 à 15 %</strong> pour faible kilométrage.</p>
      <h3>6. Ne négligez pas les rabais de groupe</h3>
      <p>La Personnelle et TD (Meloche Monnex) offrent des tarifs préférentiels aux employés de 700+ organisations au Québec. Ordres professionnels (infirmiers, ingénieurs, enseignants), syndicats, employeurs : vérifiez toujours si vous êtes admissible à un tarif de groupe.</p>
      <h3>7. Rabais retraité (65 ans et +)</h3>
      <p>La plupart des assureurs offrent un rabais de <strong>5 à 10 %</strong> aux retraités, car leur fréquence d'accidents diminue statistiquement. Mentionnez-le toujours lors d'une soumission.</p>
      <h3>8. Installez un antivol certifié</h3>
      <p>Avec la hausse de 50 % des vols de véhicules au Québec en 2023-2024, les assureurs récompensent les propriétaires qui installent un système antivol TAG, Sherlock ou un antidémarreur certifié : économie de 50 à 200 $/an.</p>
      <h3>9. Paiement annuel vs mensuel</h3>
      <p>Payer en un versement annuel plutôt qu'en 12 paiements mensuels évite les frais de financement de <strong>2 à 5 %</strong>. Sur une prime de 1 400 $, c'est 30 à 70 $ d'économie directe.</p>
      <h3>10. Utilisez un courtier certifié AMF</h3>
      <p>Un courtier a accès à 10+ assureurs simultanément. Contrairement à un assureur direct (Belair, Sonnet) limité à ses propres produits, le courtier magasine VOTRE profil auprès de plusieurs compagnies. Son service est gratuit (il est rémunéré par l'assureur choisi).</p>
      <div class="tip"><p><strong>Résultat combiné :</strong> En appliquant 4-5 de ces stratégies, un conducteur moyen au Québec peut réduire sa prime de <strong>30 à 45 %</strong> par rapport au prix initial. Sur une prime de 1 500 $, c'est 450 à 675 $ par année — soit un souper au restaurant chaque mois.</p></div>
    `
  },
  {
    img: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1200&h=600&fit=crop&auto=format',
    category: 'Habitation',
    title: "Dégât d'eau : êtes-vous vraiment couvert?",
    teaser: "Refoulements d'égout, infiltrations, inondations : les zones grises de votre police habitation et comment vous protéger réellement.",
    readtime: '6',
    cta: { url: 'https://api.leadconnectorhq.com/widget/survey/r1KNVaUqwxSQELUZRmIS', text: 'Obtenir ma soumission habitation' },
    content: `
      <p>C'est le sinistre n°1 au Québec : <strong>les dégâts d'eau représentent plus de 50 % des réclamations en assurance habitation</strong>. Pourtant, la plupart des propriétaires ignorent que leur police standard exclut ou limite plusieurs types d'infiltrations. Voici les zones grises à connaître absolument.</p>
      <h3>Les 3 types de dégâts d'eau</h3>
      <p>Les assureurs distinguent trois sources principales, avec des couvertures très différentes :</p>
      <h4>1. L'eau qui vient de l'intérieur</h4>
      <p>Tuyau qui éclate, lave-vaisselle qui fuit, chauffe-eau qui cède : ce sont les <strong>dégâts les mieux couverts</strong>. La plupart des polices de base incluent cette protection.</p>
      <h4>2. Le refoulement d'égout</h4>
      <p>L'eau qui remonte par un drain ou les toilettes du sous-sol. Cette protection est <strong>optionnelle dans 95 % des contrats</strong> et doit être ajoutée explicitement (avenant). Coût : 40 à 120 $/an selon votre zone. Limite typique : 10 000 à 50 000 $. <strong>Attention</strong> : si votre sous-sol est aménagé et inondé, sans cet avenant, vous ne touchez rien.</p>
      <h4>3. L'infiltration par le sol ou le toit</h4>
      <p>Pluies torrentielles, fonte de neige excessive, inondations : la couverture varie énormément selon les assureurs. Depuis les inondations majeures de 2017 et 2019 au Québec, plusieurs assureurs ont resserré leurs critères, particulièrement en zones inondables.</p>
      <div class="warning"><p><strong>À vérifier absolument dans votre police :</strong> les exclusions liées à l'eau souterraine, aux infiltrations par les fondations, et aux événements climatiques extrêmes. Ces exclusions peuvent représenter 80 % des causes réelles de sinistres!</p></div>
      <h3>Les exclusions courantes qui surprennent</h3>
      <ul>
        <li><strong>Eau stagnante</strong> : un dégât découvert après plusieurs jours (fuite lente) est souvent refusé pour "défaut d'entretien"</li>
        <li><strong>Toiture âgée</strong> : si votre toit a plus de 20 ans et qu'il fuit, l'assureur peut invoquer l'usure normale</li>
        <li><strong>Sous-sol non aménagé</strong> : parfois couvert seulement pour les fondations, pas pour les biens entreposés</li>
        <li><strong>Zone inondable</strong> : depuis 2021, plusieurs assureurs refusent carrément les nouvelles polices dans les zones à risque élevé</li>
      </ul>
      <h3>Les avenants essentiels à négocier</h3>
      <p>Pour être vraiment protégé contre l'eau, exigez ces trois avenants :</p>
      <ol>
        <li><strong>Refoulement d'égout</strong> — limite d'au moins 25 000 $</li>
        <li><strong>Infiltration d'eau par le sol</strong> — couverture "élargie" pour eau souterraine</li>
        <li><strong>Événements climatiques extrêmes</strong> — important depuis les dernières années avec la multiplication des pluies intenses</li>
      </ol>
      <div class="tip"><p><strong>Prévention qui réduit votre prime :</strong> Installation d'un clapet anti-retour sur votre drain de sous-sol (500 à 1 500 $), une pompe submersible avec batterie d'urgence, et des détecteurs d'eau connectés. Certains assureurs (Intact, Desjardins) offrent des rabais ou des trousses gratuites pour ces équipements.</p></div>
      <h3>Que faire en cas de sinistre?</h3>
      <ol>
        <li>Arrêter l'arrivée d'eau (fermer la valve principale au besoin)</li>
        <li>Prendre des photos/vidéos avant de nettoyer — CRUCIAL pour la preuve</li>
        <li>Appeler immédiatement votre assureur (ligne 24/7)</li>
        <li>Faire venir un spécialiste de l'eau (souvent recommandé par l'assureur) dans les 24 h pour éviter les moisissures</li>
        <li>Conserver toutes les factures et preuves de dépenses d'urgence</li>
      </ol>
    `
  },
  {
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop&auto=format',
    category: 'Entrepreneurs',
    title: "Entrepreneurs : stratégie fiscale avec l'assurance vie permanente",
    teaser: "Comment les assurances vie corporatives peuvent optimiser votre fiscalité et bâtir du patrimoine à long terme.",
    readtime: '9',
    cta: { url: 'https://api.leadconnectorhq.com/widget/survey/QPAciL4BPFpnyaazzwZT', text: 'Parler à un expert entrepreneur' },
    content: `
      <p>Pour les entrepreneurs québécois avec société par actions (Inc.), l'assurance vie permanente est bien plus qu'une protection : c'est un <strong>outil fiscal et successoral puissant</strong> que les CPA et conseillers financiers avertis recommandent pour optimiser le patrimoine corporatif.</p>
      <h3>Le problème des liquidités excédentaires</h3>
      <p>Votre société accumule des liquidités excédentaires année après année? Vous faites face à 3 défis :</p>
      <ul>
        <li><strong>Impôt sur placements passifs</strong> : taux combiné fédéral + Québec d'environ 50 % sur les revenus d'intérêts et dividendes imposables reçus par la société</li>
        <li><strong>Perte de la déduction pour petite entreprise</strong> (DPE) : dès que votre société génère plus de 50 000 $ de revenus passifs, votre taux d'impôt corporatif grimpe de 12,2 % à 26,5 % au Québec</li>
        <li><strong>Pénalité à la sortie</strong> : les dividendes vers vous personnellement sont re-imposés</li>
      </ul>
      <h3>La solution : police vie permanente corporative</h3>
      <p>Vous prenez une police vie entière ou vie universelle <strong>au nom de votre société</strong>, avec votre société comme bénéficiaire. Les avantages fiscaux sont majeurs :</p>
      <h4>Avantage 1 : Croissance à l'abri de l'impôt</h4>
      <p>La valeur de rachat de la police croît dans un compartiment fiscalement protégé (similaire à un CELI, mais sans plafond de cotisation). Vous évitez l'impôt annuel de 50 % sur les intérêts.</p>
      <h4>Avantage 2 : Multiplicateur successoral</h4>
      <p>Au décès, le produit d'assurance entre dans le Compte de dividendes en capital (CDC) de la société. Les héritiers peuvent alors recevoir <strong>la quasi-totalité du capital-décès en dividendes libres d'impôt</strong>. C'est souvent un multiplicateur de 2-3x comparativement à simplement laisser des placements dans la société.</p>
      <div class="callout"><p><strong>Exemple chiffré :</strong> Un entrepreneur de 45 ans place 30 000 $/an dans une police Canada Vie (ou Beneva Vie Universelle). À 75 ans, le capital-décès atteint environ 2,5 M$. Le CDC généré permettrait à ses héritiers de recevoir environ 2,3 M$ net d'impôt — vs environ 1 M$ net s'il avait laissé l'argent en placements imposables dans la société.</p></div>
      <h4>Avantage 3 : Financement par effet de levier</h4>
      <p>Une fois la valeur de rachat accumulée, votre société peut <strong>emprunter contre la police</strong> auprès d'une banque, tout en continuant à faire croître le capital. Les intérêts peuvent être déductibles si l'emprunt sert à investir. C'est la stratégie « immediate financing arrangement » (IFA), prisée par les entrepreneurs performants.</p>
      <h3>Pour qui ça s'adresse?</h3>
      <p>Cette stratégie n'est pas pour tout le monde. Elle est optimale pour :</p>
      <ul>
        <li>Entrepreneurs 35-60 ans avec Inc. ou société de gestion</li>
        <li>Surplus annuel net de 20 000 $ et + disponible dans la société</li>
        <li>Horizon long terme (15+ ans)</li>
        <li>Désir de protéger/transférer le patrimoine à la prochaine génération</li>
        <li>Souci d'optimisation fiscale vs simple consommation immédiate</li>
      </ul>
      <div class="warning"><p><strong>Attention aux pièges :</strong> Toutes les polices permanentes ne sont pas égales. Une T-100 n'a pas de valeur de rachat. Une vie universelle avec des frais mal structurés peut donner de mauvais rendements. La police doit aussi être <strong>"exemptée"</strong> fiscalement pour maintenir les avantages. Un expert est essentiel.</p></div>
      <h3>Comparaison : investir en société vs assurance vie permanente</h3>
      <p>Pour un entrepreneur de 45 ans avec 25 000 $/an de surplus, sur 30 ans :</p>
      <ul>
        <li><strong>Placements traditionnels en société</strong> (rendement net d'impôt ~4,5 %) : environ 1,4 M$ pour les héritiers après impôts successoraux</li>
        <li><strong>Vie universelle corporative</strong> : environ 2,6 M$ nets aux héritiers via CDC</li>
      </ul>
      <p>La différence de <strong>1,2 M$</strong> justifie amplement une consultation approfondie.</p>
      <h3>Par où commencer?</h3>
      <p>Un bon conseiller financier spécialisé en fiscalité d'entrepreneurs devrait vous présenter :</p>
      <ol>
        <li>Une analyse de votre situation corporative actuelle (T2, états financiers)</li>
        <li>Une projection comparative chiffrée sur 20-30 ans</li>
        <li>Un choix entre Vie Entière participative (Canada Vie, Manuvie, Équitable) ou Vie Universelle (iA, Canada Vie)</li>
        <li>Une revue de votre convention entre actionnaires pour intégrer l'assurance rachat d'actions si applicable</li>
      </ol>
    `
  },
  {
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&auto=format',
    category: 'Santé',
    title: "Maladies graves : pourquoi cette assurance est essentielle",
    teaser: "2 Canadiens sur 5 développeront un cancer. Voici comment cette protection peut sauver votre situation financière.",
    readtime: '5',
    cta: { url: 'https://api.leadconnectorhq.com/widget/survey/QPAciL4BPFpnyaazzwZT', text: 'Obtenir ma soumission' },
    content: `
      <p>Selon la Société canadienne du cancer, <strong>2 Canadiens sur 5</strong> développeront un cancer au cours de leur vie. Ajoutez les AVC, les infarctus et les autres maladies graves : le risque est beaucoup plus élevé que la plupart des gens le pensent. Pourtant, <strong>l'assurance maladies graves reste largement sous-utilisée au Québec</strong>.</p>
      <h3>Qu'est-ce qu'une assurance maladies graves?</h3>
      <p>Contrairement à l'assurance vie qui verse au décès, l'assurance maladies graves verse un <strong>capital forfaitaire libre d'impôt de votre vivant</strong>, dès qu'un diagnostic couvert est confirmé. Vous recevez typiquement 25 000 $, 50 000 $, 100 000 $ ou plus, en un seul paiement.</p>
      <p>L'argent est à vous : vous pouvez l'utiliser pour n'importe quoi — traitements à l'étranger, remboursement d'hypothèque, pause-salaire, voyage de rétablissement avec la famille, soins privés, etc.</p>
      <h3>Les maladies typiquement couvertes</h3>
      <p>Les bonnes polices couvrent 24 à 26 maladies graves, dont les plus fréquentes :</p>
      <ul>
        <li>Cancer (mettant la vie en danger)</li>
        <li>Crise cardiaque (infarctus du myocarde)</li>
        <li>Accident vasculaire cérébral (AVC)</li>
        <li>Pontage aorto-coronarien</li>
        <li>Insuffisance rénale</li>
        <li>Greffe d'organe majeur</li>
        <li>Paralysie / Sclérose en plaques</li>
        <li>Alzheimer / Parkinson</li>
        <li>Brûlures graves</li>
        <li>Cécité / Surdité</li>
      </ul>
      <h3>Pourquoi c'est crucial au Québec</h3>
      <p>Plusieurs Québécois pensent être protégés par la RAMQ et leur assurance collective. Mais voici la réalité :</p>
      <div class="warning"><p><strong>La RAMQ couvre les soins médicaux, pas vos pertes de revenus.</strong> Si vous êtes en traitement de chimiothérapie 6 mois et que votre conjoint doit réduire son horaire pour s'occuper de vous, personne ne paie vos factures courantes.</p></div>
      <ul>
        <li>L'assurance invalidité employeur couvre <strong>60 à 70 % du salaire</strong> seulement, et il y a souvent une période d'attente de 90-180 jours</li>
        <li>Les traitements innovants non couverts par la RAMQ (immunothérapies ciblées, cliniques à l'étranger) peuvent coûter <strong>50 000 à 200 000 $</strong></li>
        <li>Les dépenses indirectes s'accumulent : transport médical, stationnement hospitalier, aides à domicile, renovations d'adaptation, garderie supplémentaire pour les enfants</li>
      </ul>
      <div class="callout"><p><strong>Exemple réel :</strong> Une Montréalaise de 42 ans, mère de 2 enfants, reçoit un diagnostic de cancer du sein. Traitement total : 8 mois. Sa police maladies graves verse 100 000 $. Utilisation : remboursement partiel de l'hypothèque (40 000 $), congé sabbatique du conjoint (30 000 $), soins complémentaires non couverts (15 000 $), épargne pour les études des enfants (15 000 $). Zéro stress financier pendant la guérison.</p></div>
      <h3>Combien ça coûte?</h3>
      <p>C'est souvent plus abordable qu'on le pense. Exemples pour 100 000 $ de couverture, non-fumeur :</p>
      <ul>
        <li><strong>30 ans, femme</strong> : 35 à 55 $/mois</li>
        <li><strong>40 ans, femme</strong> : 55 à 85 $/mois</li>
        <li><strong>40 ans, homme</strong> : 70 à 110 $/mois</li>
        <li><strong>50 ans, femme</strong> : 110 à 160 $/mois</li>
      </ul>
      <h3>Les options à connaître</h3>
      <h4>1. Remboursement de primes au décès (RPD)</h4>
      <p>Si vous décédez sans avoir réclamé, vos héritiers reçoivent toutes les primes payées. Option à ajouter pour environ 15-20 % plus cher.</p>
      <h4>2. Remboursement de primes à l'expiration</h4>
      <p>Si la police arrive à terme sans réclamation, vous récupérez 100 % de vos primes. Option intéressante pour ceux qui voient l'assurance comme un "investissement sans risque".</p>
      <h4>3. Maladies graves juniors</h4>
      <p>Polices spécifiquement pour enfants dès 30 jours. Couvrent des maladies infantiles spécifiques. Coût : 15-30 $/mois pour 50 000 $.</p>
      <div class="tip"><p><strong>Conseil d'expert :</strong> Les meilleurs fournisseurs au Canada pour maladies graves incluent Canada Vie, Manuvie, iA Groupe financier et Beneva. Comparez toujours la <strong>liste exacte des maladies couvertes</strong>, les délais d'attente après diagnostic (typiquement 30 jours de survie), et la définition précise du cancer couvert.</p></div>
    `
  },
  {
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop&auto=format',
    category: 'Habitation',
    title: "Nouveau propriétaire : guide complet de vos assurances",
    teaser: "Habitation, titres, hypothèque, vie hypothécaire : tout ce qu'il faut savoir quand on achète sa première maison au Québec.",
    readtime: '8',
    cta: { url: 'https://api.leadconnectorhq.com/widget/survey/r1KNVaUqwxSQELUZRmIS', text: 'Soumission habitation' },
    content: `
      <p>Vous venez de signer l'offre d'achat de votre première maison au Québec? Félicitations! Mais au-delà de l'hypothèque, c'est tout un écosystème d'assurances qui entre en jeu. Voici votre guide complet pour ne rien oublier — et éviter les pièges coûteux.</p>
      <h3>1. Assurance habitation (obligatoire)</h3>
      <p>Votre créancier hypothécaire l'exige pour débloquer le prêt. Sans preuve d'assurance valide au jour de la prise de possession, la transaction n'a pas lieu. Vous devez souscrire <strong>avant le notaire</strong>.</p>
      <h4>Les 3 composantes essentielles :</h4>
      <ul>
        <li><strong>Bâtiment</strong> : Assurez à la valeur de reconstruction (pas la valeur marchande!). Votre courtier peut utiliser le calculateur HomeGuard ou équivalent.</li>
        <li><strong>Biens personnels</strong> : Typiquement 50-70 % de la valeur du bâtiment. Pour une maison de 500 000 $, visez 250 000 à 350 000 $ pour le contenu.</li>
        <li><strong>Responsabilité civile</strong> : Minimum 1 M$, idéalement 2 M$. Couvre les blessures à des visiteurs ou dommages causés involontairement.</li>
      </ul>
      <div class="callout"><p><strong>Piège fréquent :</strong> Ne pas assurer à la valeur de reconstruction. Si votre maison vaut 500 000 $ sur le marché mais coûte 650 000 $ à rebâtir (matériaux, main-d'œuvre actuels), vous serez sous-assuré en cas de perte totale.</p></div>
      <h3>2. Assurance titres (fortement recommandée)</h3>
      <p>Cette protection méconnue couvre les vices cachés liés aux titres de propriété : servitudes non déclarées, chevauchement de terrain, vices de construction non détectés, fraudes immobilières. Coût : <strong>300 à 600 $ une seule fois</strong>, pour toute la durée où vous êtes propriétaire.</p>
      <p>Votre notaire peut vous l'offrir via Stewart Title, First Canadian Title, FCT ou TitrePLUS. Avec la hausse des fraudes hypothécaires (+75 % depuis 2020), plusieurs experts la considèrent maintenant <strong>essentielle</strong>, pas optionnelle.</p>
      <h3>3. Assurance vie hypothécaire ou individuelle</h3>
      <p>La banque va fortement pousser sa propre "assurance prêt hypothécaire" au moment de signer. <strong>Attention</strong> : c'est rarement votre meilleur choix.</p>
      <div class="warning"><p><strong>Assurance bancaire hypothécaire :</strong> Coût élevé, couverture décroissante (diminue avec le solde), appartient à la banque (pas à vous), souscription sommaire (vrais examens médicaux seulement au moment de la réclamation — risque de refus!), non transférable si vous changez de banque.</p></div>
      <p>L'alternative : une <strong>assurance vie temporaire individuelle</strong> souscrite auprès d'un courtier indépendant. Elle est :</p>
      <ul>
        <li>Souvent 30-50 % moins chère pour une couverture équivalente</li>
        <li>Fixe (ne diminue pas avec le remboursement)</li>
        <li>Votre propriété, donc transférable entre institutions</li>
        <li>Examens médicaux faits à la souscription = couverture garantie</li>
        <li>Paie au décès peu importe l'hypothèque restante (le surplus va à vos héritiers)</li>
      </ul>
      <div class="tip"><p><strong>Gain potentiel :</strong> Pour un couple de 35 ans avec 400 000 $ d'hypothèque, une police temporaire 25 ans couvrant les deux conjoints coûte environ 60-90 $/mois. La version bancaire coûte souvent 110-140 $/mois — économie de <strong>600 à 1 000 $/année</strong> sur 25 ans.</p></div>
      <h3>4. Assurance invalidité hypothécaire</h3>
      <p>Si vous deviez tomber gravement malade, qui paierait votre hypothèque? Votre salaire compte pour 60-70 % si vous avez une assurance collective, mais cela inclut déjà vos autres dépenses.</p>
      <p>Solution : ajouter une <strong>rente d'invalidité couvrant votre versement hypothécaire</strong> (ex : 2 500 $/mois). Coût typique : 25-60 $/mois selon l'âge. Cela transforme une crise financière potentielle en simple tracas médical.</p>
      <h3>5. Assurance maladies graves</h3>
      <p>Idéalement, couvrez au moins le solde de votre hypothèque en maladies graves pour pouvoir la rembourser en totalité en cas de diagnostic grave.</p>
      <h3>Comment structurer tout ça intelligemment?</h3>
      <p>Stratégie recommandée pour un primo-accédant 30-40 ans :</p>
      <ol>
        <li><strong>Habitation</strong> : Comparez 3-5 soumissions (courtier + 2 assureurs directs)</li>
        <li><strong>Titres</strong> : Une fois seulement, via le notaire</li>
        <li><strong>Vie</strong> : Temporaire 20-25 ans individuelle, pour couvrir l'hypothèque + les enfants + 5-10 ans de revenu. Refusez la vie bancaire.</li>
        <li><strong>Invalidité</strong> : Minimum égal au versement hypothécaire mensuel</li>
        <li><strong>Maladies graves</strong> : 50 000 à 150 000 $ selon votre budget</li>
      </ol>
      <p>Un seul courtier AMF peut s'occuper des 5 produits, vous faire épargner 15-30 % avec les rabais multi-polices et multi-produits, et vous donner une cohérence stratégique.</p>
    `
  },
  {
    img: 'https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=1200&h=600&fit=crop&auto=format',
    category: 'Investisseurs',
    title: "Investisseurs immobiliers : quelles assurances pour un duplex ou triplex?",
    teaser: "Les particularités d'une police pour immeuble à revenus et les protections essentielles à négocier.",
    readtime: '7',
    cta: { url: 'https://api.leadconnectorhq.com/widget/survey/r1KNVaUqwxSQELUZRmIS', text: 'Soumission immeuble à revenus' },
    content: `
      <p>Vous êtes propriétaire d'un duplex, triplex ou immeuble à revenus au Québec? Votre police habitation standard <strong>ne vous couvre pas adéquatement</strong>. Les immeubles locatifs exigent une "police propriétaire non-occupant" ou "police immeuble à revenus" avec des protections spécifiques. Voici ce qu'il faut absolument savoir.</p>
      <h3>La différence fondamentale</h3>
      <p>Une police habitation résidentielle assume que vous habitez les lieux. Dès qu'il y a des <strong>locataires</strong>, le profil de risque change complètement pour l'assureur :</p>
      <ul>
        <li>Risque plus élevé de négligence (ne sont pas "chez eux")</li>
        <li>Turnover des locataires = méconnaissance des installations</li>
        <li>Usage plus intensif des équipements</li>
        <li>Risque de conflits propriétaire-locataire menant à du vandalisme</li>
        <li>Multiples foyers, cuisines, systèmes électriques en opération</li>
      </ul>
      <h3>Les 3 grandes catégories de polices</h3>
      <h4>1. Police propriétaire-occupant d'un plex</h4>
      <p>Vous habitez un logement et louez les autres. Police semi-habitation, semi-commerciale. Prime typique : 1 200-2 500 $/an pour un duplex à Montréal.</p>
      <h4>2. Police immeuble locatif (propriétaire non-occupant)</h4>
      <p>Vous n'habitez pas l'immeuble. Considérée comme assurance commerciale. Prime : 1 800-4 500 $/an selon la taille et l'emplacement.</p>
      <h4>3. Police immeuble de placement (5+ logements)</h4>
      <p>Catégorie entièrement commerciale, marché spécialisé. Certains assureurs (KBD, Promutuel commercial, iA IARD commercial) sont spécialisés dans ce créneau.</p>
      <h3>Les protections essentielles à négocier</h3>
      <h4>Perte de revenus locatifs</h4>
      <p>Si un sinistre rend un logement inhabitable, <strong>combien de mois de loyer êtes-vous couvert?</strong> Standard : 12 mois. À négocier : 18-24 mois pour les sinistres majeurs. Pour un triplex à 1 800 $/mois par logement, la différence entre 12 et 24 mois peut représenter 21 600 $ non couverts.</p>
      <h4>Responsabilité civile commerciale</h4>
      <p>Minimum légal : 1 M$. Recommandé : <strong>2-5 M$</strong>. Un locataire blessé sur votre escalier extérieur en hiver peut facilement poursuivre pour 500 000 $+ en dommages corporels.</p>
      <h4>Dégâts d'eau majeurs</h4>
      <p>Incluez obligatoirement l'avenant refoulement d'égout avec limite élevée. Les sinistres multi-logements sont coûteux : un refoulement qui affecte 3 logements peut représenter 80 000-150 000 $ de dommages.</p>
      <h4>Vandalisme et actes malveillants</h4>
      <p>Important en cas de conflit avec un ancien locataire. Vérifiez la couverture et les délais de réclamation.</p>
      <h4>Biens du propriétaire</h4>
      <p>Ne pas confondre avec les biens des locataires (eux doivent avoir leur propre assurance locataire). Vous couvrez les appareils électroménagers fournis, les équipements communs, les outils.</p>
      <div class="callout"><p><strong>Clause cruciale :</strong> Vérifiez si votre police exige que vos locataires souscrivent une <strong>assurance locataire avec mention de votre responsabilité civile</strong>. Certains assureurs l'imposent et l'inclure dans vos baux protège aussi votre prime.</p></div>
      <h3>Les pièges à éviter</h3>
      <h4>Piège 1 : Ne pas déclarer le statut locatif</h4>
      <p>Si votre police indique "résidence principale" alors que vous louez, un sinistre peut être <strong>totalement refusé</strong> pour fausse déclaration matérielle. Soyez transparent dès le départ.</p>
      <h4>Piège 2 : Sous-évaluer la valeur de reconstruction</h4>
      <p>Pour un triplex construit avant 1970, la reconstruction coûte souvent 40-60 % de plus que la valeur marchande. Plafond à vérifier impérativement.</p>
      <h4>Piège 3 : Oublier le risque environnemental</h4>
      <p>Vieilles peintures au plomb, isolation amiante, réservoir de mazout enfoui : ces éléments peuvent être exclus et engendrer des réclamations refusées.</p>
      <div class="warning"><p><strong>Attention zones inondables :</strong> Depuis 2021, plusieurs immeubles à revenus en zone inondable voient leur police résiliée au renouvellement. Vérifiez la cartographie du gouvernement du Québec avant d'acheter un nouvel immeuble.</p></div>
      <h3>Stratégies pour réduire la prime</h3>
      <ul>
        <li><strong>Regroupement multi-immeubles</strong> chez un même assureur : rabais de 10-20 %</li>
        <li><strong>Exigence d'assurance locataire</strong> dans chaque bail (réduit vos risques)</li>
        <li><strong>Détecteurs de fumée connectés + système d'alarme centralisé</strong></li>
        <li><strong>Franchise élevée</strong> (2 500-5 000 $) justifiée par vos revenus locatifs</li>
        <li><strong>Mise à jour proactive</strong> du système électrique, plomberie, toiture</li>
      </ul>
      <h3>Choisir le bon assureur</h3>
      <p>Tous les assureurs ne sont pas à l'aise avec les immeubles à revenus. Les plus compétitifs au Québec pour ce segment :</p>
      <ul>
        <li><strong>Promutuel</strong> : Excellent pour petits plex (2-6 logements)</li>
        <li><strong>Intact / KBD</strong> : Offre complète incluant les immeubles plus grands</li>
        <li><strong>iA IARD commercial</strong> : Pour les portefeuilles de 3+ immeubles</li>
        <li><strong>L'Unique (Beneva)</strong> : Profils à risque ou immeubles anciens</li>
      </ul>
    `
  },
  {
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=600&fit=crop&auto=format',
    category: 'Comparaison',
    title: "Comment bien comparer les soumissions d'assurance?",
    teaser: "Le prix n'est pas tout. 5 critères cruciaux à vérifier avant de changer d'assureur au Québec.",
    readtime: '6',
    cta: { url: 'soumission-rapide.html', text: 'Obtenir mes soumissions' },
    content: `
      <p>Vous avez 3 soumissions devant vous. La moins chère est la meilleure, non? <strong>Pas nécessairement.</strong> Plusieurs Québécois changent d'assureur pour économiser 200 $, puis découvrent en cas de sinistre que leur nouvelle police offrait 30 % de moins de protection. Voici les 5 critères qui comptent vraiment.</p>
      <h3>1. Les montants de couverture (à comparer à équivalents!)</h3>
      <p>C'est le piège n°1 : comparer deux soumissions avec des montants différents. Un assureur peut offrir une prime plus basse... simplement parce qu'il propose <strong>moins de couverture</strong>.</p>
      <p><strong>Pour une soumission auto, vérifiez que les 3 soumissions ont :</strong></p>
      <ul>
        <li>Même montant de responsabilité civile (1 M$, 2 M$?)</li>
        <li>Même franchise collision (500 $, 1 000 $?)</li>
        <li>Même couverture tous risques sauf collision (ou absence)</li>
        <li>Mêmes limites pour biens dans le véhicule</li>
        <li>Mêmes avenants (véhicule de remplacement, valeur à neuf, etc.)</li>
      </ul>
      <p><strong>Pour l'habitation :</strong></p>
      <ul>
        <li>Valeur bâtiment (à reconstruction, pas marchande)</li>
        <li>Limite de biens personnels</li>
        <li>Responsabilité civile (1 M$ ou 2 M$?)</li>
        <li>Refoulement d'égout, eau souterraine, tremblements de terre</li>
        <li>Valeur à neuf des biens vs valeur dépréciée</li>
      </ul>
      <div class="callout"><p><strong>Exemple concret :</strong> Assureur A offre 1 150 $ pour auto avec 2 M$ de responsabilité civile. Assureur B offre 1 020 $ avec seulement 1 M$. Économie apparente : 130 $. Mais en cas d'accident grave, le 2e million peut faire la différence entre garder sa maison ou tout perdre en poursuite civile.</p></div>
      <h3>2. La solidité financière de l'assureur</h3>
      <p>Toutes les compagnies ne se valent pas. Vérifiez les notations A.M. Best ou Standard & Poor's. Au Québec, les assureurs avec la meilleure stabilité financière :</p>
      <ul>
        <li><strong>Intact Corporation</strong> : A+ (excellent)</li>
        <li><strong>Desjardins Assurances générales</strong> : A+</li>
        <li><strong>iA Groupe financier</strong> : A+</li>
        <li><strong>Beneva</strong> : A</li>
        <li><strong>Promutuel</strong> : A-</li>
      </ul>
      <p>Avec ces notations, vous êtes assuré que la compagnie pourra honorer ses engagements, même après un événement catastrophique majeur.</p>
      <h3>3. La qualité du service de réclamations</h3>
      <p>Payer une prime, c'est facile. Recevoir un chèque rapidement en cas de sinistre, c'est une autre histoire. Recherchez :</p>
      <ul>
        <li><strong>Délai moyen de règlement</strong> : Moins de 30 jours pour un sinistre standard</li>
        <li><strong>Ligne 24/7 francophone</strong> (essentiel au Québec!)</li>
        <li><strong>Réseau d'entrepreneurs accrédités</strong> (nettoyage, construction, garagistes)</li>
        <li><strong>Application mobile</strong> pour déclarer et suivre un sinistre</li>
        <li><strong>Cote Indice CAA ou Protégez-Vous</strong> sur la satisfaction clients</li>
      </ul>
      <div class="tip"><p><strong>Conseil d'expert :</strong> Demandez à votre courtier quel est son <strong>taux de satisfaction clients</strong> spécifique avec chaque assureur qu'il propose. Un courtier expérimenté sait quels assureurs créent le moins de problèmes en cas de réclamation.</p></div>
      <h3>4. Les exclusions — le diable dans les détails</h3>
      <p>Les polices "moins chères" le sont souvent à cause d'exclusions supplémentaires. Avant de signer, demandez-vous :</p>
      <ul>
        <li>Quels types de dégâts d'eau sont <strong>exclus</strong>?</li>
        <li>Y a-t-il des exclusions par âge du bâtiment (toiture 20+ ans, plomberie en polybutylène)?</li>
        <li>Exclusions par zone géographique (inondation, tremblement)?</li>
        <li>Exclusions liées à l'usage commercial ou au télétravail?</li>
        <li>Exclusions pour négligence ou défaut d'entretien?</li>
      </ul>
      <h3>5. La stabilité de la prime dans le temps</h3>
      <p>Un assureur peut vous attirer avec une prime "d'accueil" avantageuse la première année, puis augmenter agressivement à chaque renouvellement. Demandez :</p>
      <ul>
        <li>L'historique moyen d'augmentation annuelle pour des profils similaires au vôtre</li>
        <li>La politique après la première réclamation (augmentation? perte de rabais?)</li>
        <li>L'impact en cas d'événement climatique majeur dans votre région</li>
      </ul>
      <div class="warning"><p><strong>Attention :</strong> Certains assureurs directs en ligne ont la réputation d'avoir des hausses annuelles importantes (+7 à 12 %/an dans les années d'inflation récentes), même sans réclamation. À vérifier avec votre courtier.</p></div>
      <h3>Le "coût total sur 5 ans" — le vrai comparateur</h3>
      <p>Un exercice que peu de gens font : projetez le <strong>coût total sur 5 ans</strong> en estimant 4-6 % d'augmentation annuelle typique pour chaque assureur. La soumission la moins chère en année 1 peut devenir la plus chère en année 5.</p>
    `
  },
  {
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop&auto=format',
    category: 'Santé',
    title: "Invalidité : votre protection collective est-elle suffisante?",
    teaser: "Les limites de la CNESST et des régimes collectifs. Pourquoi une assurance invalidité privée est souvent nécessaire.",
    readtime: '5',
    cta: { url: 'https://api.leadconnectorhq.com/widget/survey/QPAciL4BPFpnyaazzwZT', text: 'Parler à un conseiller' },
    content: `
      <p>"J'ai une assurance collective au travail, je suis couvert." Cette phrase, on l'entend constamment. Pourtant, la majorité des régimes collectifs au Québec présentent des <strong>limites sérieuses</strong> que les employés découvrent seulement en situation d'invalidité. Voici ce qui vous attend réellement si vous deviez arrêter de travailler pour maladie ou blessure.</p>
      <h3>Les 3 sources de revenus en cas d'invalidité</h3>
      <h4>1. CNESST (Commission des normes, équité, santé et sécurité)</h4>
      <p>Couvre <strong>uniquement</strong> les accidents et maladies professionnelles. Si vous tombez malade (cancer, dépression, maladie cardiaque) sans lien avec votre travail, vous n'avez droit à rien de la CNESST.</p>
      <h4>2. Assurance emploi (AE) — prestations maladie</h4>
      <p>Maximum : <strong>26 semaines</strong> à environ 55 % de votre salaire (plafonné à environ 650 $/semaine en 2025). Après 6 mois, vous n'avez plus rien de ce côté.</p>
      <h4>3. Assurance collective employeur</h4>
      <p>C'est le plan sur lequel la majorité des Québécois comptent. Mais les limites sont souvent surprenantes...</p>
      <h3>Les 5 limites des régimes collectifs</h3>
      <h4>Limite 1 : Pourcentage limité du salaire</h4>
      <p>La plupart des régimes collectifs couvrent <strong>60 à 70 % de votre salaire brut</strong>. Pour un Québécois gagnant 75 000 $, cela représente 45 000 à 52 500 $ brut par année. Comme les prestations sont souvent imposables, le net peut tomber à 35 000-40 000 $. Comment payer une hypothèque, une auto, l'épicerie et les factures avec ça?</p>
      <h4>Limite 2 : Plafond maximal</h4>
      <p>Beaucoup de régimes plafonnent à 4 000-6 000 $/mois, peu importe votre salaire. Si vous gagnez 100 000 $+, votre régime ne couvre qu'une fraction de vos revenus réels.</p>
      <h4>Limite 3 : Période d'élimination</h4>
      <p>Typiquement <strong>90 à 180 jours</strong> avant le début des prestations. Entre le jour où vous arrêtez de travailler et le premier chèque, vous pouvez attendre 3-6 mois sans revenu.</p>
      <h4>Limite 4 : Durée maximale</h4>
      <p>Plusieurs régimes "courte durée" s'arrêtent après 17 à 26 semaines. Les régimes "longue durée" peuvent aller jusqu'à 65 ans... mais après 24 mois, la définition change souvent de <strong>"incapacité à faire votre propre emploi"</strong> à <strong>"incapacité à faire TOUT emploi"</strong>. Beaucoup plus difficile à prouver.</p>
      <div class="warning"><p><strong>Exemple réel :</strong> Un ingénieur en informatique subit un burnout sévère. Les 2 premières années, il reçoit ses prestations. À la 3e année, l'assureur l'évalue et conclut qu'il pourrait travailler comme "adjoint administratif" à 15 $/h. Ses prestations sont coupées malgré son incapacité réelle à reprendre son métier.</p></div>
      <h4>Limite 5 : Exclusions</h4>
      <p>Santé mentale limitée à 24 mois dans plusieurs régimes, exclusions pour conditions préexistantes, certaines maladies chroniques non couvertes.</p>
      <h3>Ce que fait l'assurance invalidité privée</h3>
      <p>Une police individuelle complète les failles du collectif :</p>
      <ul>
        <li><strong>Prestations non imposables</strong> (vous payez les primes, donc revenus nets)</li>
        <li><strong>Définition "propre emploi"</strong> garantie pour toute la durée (essentiel pour les professionnels)</li>
        <li><strong>Prestations garanties</strong> qu'importe les revenus d'autres sources</li>
        <li><strong>Option de majoration future</strong> sans re-examen médical</li>
        <li><strong>Prestations pour soins partiels</strong> (si vous revenez à 50 % du travail)</li>
        <li><strong>Portable</strong> : vous la gardez si vous changez d'emploi ou devenez travailleur autonome</li>
      </ul>
      <div class="callout"><p><strong>Combien ça coûte?</strong><br>Pour 2 500 $/mois de prestations non imposables (complément du collectif), jusqu'à 65 ans :<br>— Homme 35 ans, col blanc : 55-85 $/mois<br>— Femme 35 ans, col blanc : 75-110 $/mois<br>— Travailleur autonome : 30-50 % plus cher<br>— Professionnels (médecins, avocats, dentistes) : polices spécialisées disponibles</p></div>
      <h3>À qui s'adresse particulièrement l'invalidité privée?</h3>
      <ul>
        <li><strong>Travailleurs autonomes et entrepreneurs</strong> : AUCUN régime collectif. Priorité absolue.</li>
        <li><strong>Professionnels libéraux</strong> (médecins, avocats, ingénieurs, comptables) : revenus élevés mal protégés par les plafonds collectifs</li>
        <li><strong>Cadres supérieurs</strong> : même situation, plafonds insuffisants</li>
        <li><strong>Personnes avec hypothèque et famille</strong> : 40 % de leur salaire ne suffit pas pour payer la maison</li>
        <li><strong>Personnes à emploi spécialisé</strong> : plus votre travail est unique, plus la définition "propre emploi" devient critique</li>
      </ul>
      <div class="tip"><p><strong>Conseil d'expert :</strong> Commandez votre livret de police collective à votre employeur et demandez à un conseiller certifié AMF de l'analyser. En 30 minutes, il peut identifier précisément les lacunes de votre protection et proposer la police complémentaire optimale — souvent pour moins de 75 $/mois.</p></div>
    `
  }
];

// ═══════════════════════════════════════════════════════════════════════════
// GÉNÉRATION DES CARTES + MODAL
// ═══════════════════════════════════════════════════════════════════════════
(function() {
  const grid = document.getElementById('guidesGrid');
  if (!grid) return;

  // Génération des cartes
  ARTICLES.forEach((art, i) => {
    const delay = (i % 3) * 0.1;
    const card = document.createElement('div');
    card.className = 'guide-card fade-in';
    card.style.transitionDelay = delay + 's';
    card.dataset.idx = i;
    card.innerHTML = `
      <div class="guide-img-wrap">
        <img src="${art.img}" alt="${art.title}" loading="lazy" />
        <div class="guide-category">${art.category}</div>
      </div>
      <div class="guide-body">
        <div class="guide-meta"><span>📖 ${art.readtime} min de lecture</span></div>
        <h3>${art.title}</h3>
        <p>${art.teaser}</p>
        <span class="guide-readmore">Lire l'article <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></span>
      </div>
    `;
    card.addEventListener('click', () => openArticle(i));
    grid.appendChild(card);
  });

  // Observer pour fade-in sur les nouvelles cartes
  setTimeout(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.guide-card.fade-in').forEach(el => observer.observe(el));
  }, 50);

  // Modal
  const modal = document.getElementById('articleModal');
  const closeBtn = document.getElementById('articleClose');
  const prevBtn = document.getElementById('articlePrev');
  const nextBtn = document.getElementById('articleNext');
  let currentIdx = 0;

  function openArticle(idx) {
    currentIdx = idx;
    renderArticle();
    modal.classList.add('open');
    document.body.classList.add('modal-open');
    modal.scrollTop = 0;
  }

  function closeArticle() {
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
  }

  function renderArticle() {
    const art = ARTICLES[currentIdx];
    document.getElementById('articleImg').src = art.img;
    document.getElementById('articleImg').alt = art.title;
    document.getElementById('articleCategory').textContent = art.category;
    document.getElementById('articleTitle').textContent = art.title;
    document.getElementById('articleMeta').innerHTML = `
      <span>📖 ${art.readtime} min de lecture</span>
      <span>·</span>
      <span>Par les experts DécouvrAssur</span>
    `;
    document.getElementById('articleContent').innerHTML = art.content + `
      <div class="article-cta-block">
        <div class="article-cta-block-text">
          <h4>Prêt à passer à l'action?</h4>
          <p>Obtenez une estimation personnalisée gratuitement, sans engagement.</p>
        </div>
        <a href="${art.cta.url}" target="_blank" rel="noopener">${art.cta.text}</a>
      </div>
    `;
    document.getElementById('articleProgress').textContent = `Article ${currentIdx + 1} sur ${ARTICLES.length}`;
    prevBtn.disabled = currentIdx === 0;
    nextBtn.innerHTML = currentIdx === ARTICLES.length - 1
      ? `Premier article <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>`
      : `Suivant <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>`;
    modal.scrollTo({ top: 0 });
  }

  function nextArticle() {
    currentIdx = (currentIdx + 1) % ARTICLES.length;
    renderArticle();
  }

  function prevArticle() {
    if (currentIdx > 0) {
      currentIdx--;
      renderArticle();
    }
  }

  closeBtn.addEventListener('click', closeArticle);
  prevBtn.addEventListener('click', prevArticle);
  nextBtn.addEventListener('click', nextArticle);

  // Fermer en cliquant sur le backdrop
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeArticle();
  });

  // ESC pour fermer, flèches pour naviguer
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeArticle();
    else if (e.key === 'ArrowRight') nextArticle();
    else if (e.key === 'ArrowLeft' && currentIdx > 0) prevArticle();
  });
})();
