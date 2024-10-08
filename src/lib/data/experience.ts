import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'hexacoffre',
		company: 'HexaCoffre',
		description: "En tant que Responsable Projet pour HexaCoffre, j'ai dirigé la continuité de la transformation numérique d'un registre d'armement traditionnel sur papier en une solution numérique avancée.Cette application, développée en Java et XML pour les tablettes Android, a permis d'automatiser et de sécuriser la gestion des données sensibles pour les services de police municipale.Mon rôle a impliqué la conception architecturale, le développement logiciel, et la mise en œuvre de l'application sur le terrain, avec un focus particulier sur l'optimisation des performances et la fiabilité.De plus, j'ai assuré la maintenance continue, résolu les problèmes techniques, et introduit de nouvelles fonctionnalités en réponse aux besoins des utilisateurs finaux.Cette modernisation a entraîné une réduction significative des erreurs administratives et une augmentation de l'efficacité opérationnelle, transformant ainsi un processus manuel et chronophage en une solution numérique robuste et intuitive.",
		contract: ContractType.FullTime,
		type: 'Project Management',
		location: 'Marseille, France',
		period: { from: new Date(2023, 11, 1) }, // assuming the project started in December 2023 and is ongoing
		skills: getSkills('java', 'android', 'project-management'),
		name: 'Responsable Projet Hexaregistre',
		color: '#3478f6',
		links: [],
		logo: Assets.Hexacoffre,
		shortDescription: 'Transformation d’un registre papier en une application numérique pour la gestion d’armement.'
	},
	{
		slug: 'digital-express',
		company: 'Digital Express',
		description: "En tant que co-fondateur de Digital Express, j'ai joué un rôle clé dans la création et le développement de l'agence, spécialisée dans la transformation digitale des entreprises. Mon objectif principal est d'accompagner les entreprises dans l'adoption des technologies modernes pour améliorer leur efficacité opérationnelle et renforcer leur compétitivité sur le marché. Parmi les projets notables, nous avons conçu une solution personnalisée pour les restaurateurs, comprenant une gestion simplifiée des réservations, une mise en valeur des menus en ligne, et des outils pour recueillir et analyser les retours clients.J'ai également mis en place des pipelines CI/CD robustes, orchestré la containerisation avec Docker, et automatisé les déploiements à l'aide d'Ansible.Grâce à notre approche centrée sur les besoins des clients et à l'utilisation des technologies adaptées, nous avons réussi à offrir des solutions innovantes qui ont significativement amélioré la productivité et la satisfaction client.",
		contract: ContractType.SelfEmployed,
		type: 'Digital Transformation',
		location: 'Aix-en-Provence, France (Remote)',
		period: { from: new Date(2023, 4, 1)}, // assuming the project started in May 2023 and is ongoing
		skills: getSkills('docker', 'ansible', 'reactjs', 'ts', 'node', 'grafana', 'prometheus', 'nginx', 'mysql', 'prisma', 'linux'),
		name: 'Co-fondateur',
		color: '#ff5733',
		links: [],
		logo: Assets.DigitalExpress,
		shortDescription: 'Transformation digitale des entreprises pour maximiser leur efficacité et compétitivité.'
	},
	{
		slug: 'subclic',
		company: 'Subclic',
		description: "Au sein de Subclic, j'ai été chargé du développement d'une API gRPC destinée à améliorer l'intégration des fonctionnalités de notre plateforme par les développeurs externes.Ce projet a nécessité une compréhension approfondie des besoins des clients et une maîtrise technique pour concevoir une API publique robuste et performante, compatible avec les systèmes existants.En parallèle, j'ai assuré la maintenance d'une application legacy en Ruby on Rails, en identifiant et corrigeant les bugs, tout en optimisant les performances et en intégrant de nouvelles fonctionnalités pour répondre aux attentes croissantes des utilisateurs.Ces efforts ont non seulement amélioré la stabilité et la performance de l'application, mais ont également permis d'étendre ses capacités tout en assurant une transition fluide pour les utilisateurs.",
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Marseille, France',
		period: { from: new Date(2023, 0, 1), to: new Date(2023, 11, 31) }, // assuming this project ran through the year 2023
		skills: getSkills('ruby-on-rails', 'grpc'),
		name: 'Développeur',
		color: '#8e44ad',
		links: [],
		logo: Assets.Subclic,
		shortDescription: 'Développement d’une API gRPC et maintenance d’une application legacy pour Subclic.'
	}
];

export const title = 'Experience';