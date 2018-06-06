import * as express from 'express'

const app = express();

export class Resource {
	constructor(
		public Id: number,
	  public Code: String,
	  public FirstName: string,
	  public LastName: string,
	  public Activated: Boolean,
	  public Matricule: string,

	){}

}

const resources: Resource[]=[
  new Resource(1, 'aaa', 'Grand', 'Lily', true, '123456'),
  new Resource(2, 'bbb', 'Petit', 'James', false, '789456')
];


export class Activity {
	constructor(
		public Id: number,
	  public Label: String,
	  public PackageId: number,

	  public Time: any,
	  public Activated: Boolean,

	){}

}

const activities: Activity[]=[
  new Activity(1, 'bbActivity', 1, '3 months', true),
  new Activity(2, 'ccActivity', 2, '6 months', false)
];



export class Package {
	constructor(
		public Id: number,
	  public Label: String,
		public Activated: Boolean,
		public Activities: Array<any>,
	  public ProjectId: number,

	){}

}

const packages: Package[]=[
  new Package(1, 'ddPackage', true, [1,2], 1),
  new Package(2, 'eePackage', true, [1,2], 2)
];

export class Project {
	constructor(
		public Id: number,
	  public Label: String,
		public Activated: Boolean,
		public Packages: Array<any>,
	  public Color: string,

	){}

}


const projects: Project[]=[
  new Project(1, 'ffProject', true, [1,2], 'red'),
  new Project(2, 'ggProject', true, [1,2], 'yellow')
];







app.get('/', function (req, res) {
    res.send("Hello Express");
});
app.get('/api/resource', function (req, res) {
		
    res.json(resources);
});

app.get('/api/activity', function (req, res) {
    res.json(activities);
});

app.get('/api/package', function (req, res) {
    res.json(packages);
});

app.get('/api/project', function (req, res) {
    res.json(projects);
});





const server = app.listen(8000, "localhost", ()=>{
	console.log("server ok, adresse is http://localhost:8000");
});
