"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var Resource = /** @class */ (function () {
    function Resource(Id, Code, FirstName, LastName, Activated, Matricule) {
        this.Id = Id;
        this.Code = Code;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Activated = Activated;
        this.Matricule = Matricule;
    }
    return Resource;
}());
exports.Resource = Resource;
var resources = [
    new Resource(1, 'aaa', 'Grand', 'Lily', true, '123456'),
    new Resource(2, 'bbb', 'Petit', 'James', false, '789456')
];
var Activity = /** @class */ (function () {
    function Activity(Id, Label, PackageId, Time, Activated) {
        this.Id = Id;
        this.Label = Label;
        this.PackageId = PackageId;
        this.Time = Time;
        this.Activated = Activated;
    }
    return Activity;
}());
exports.Activity = Activity;
var activities = [
    new Activity(1, 'bbActivity', 1, '3 months', true),
    new Activity(2, 'ccActivity', 2, '6 months', false)
];
var Package = /** @class */ (function () {
    function Package(Id, Label, Activated, Activities, ProjectId) {
        this.Id = Id;
        this.Label = Label;
        this.Activated = Activated;
        this.Activities = Activities;
        this.ProjectId = ProjectId;
    }
    return Package;
}());
exports.Package = Package;
var packages = [
    new Package(1, 'ddPackage', true, [1, 2], 1),
    new Package(2, 'eePackage', true, [1, 2], 2)
];
var Project = /** @class */ (function () {
    function Project(Id, Label, Activated, Packages, Color) {
        this.Id = Id;
        this.Label = Label;
        this.Activated = Activated;
        this.Packages = Packages;
        this.Color = Color;
    }
    return Project;
}());
exports.Project = Project;
var projects = [
    new Project(1, 'ffProject', true, [1, 2], 'red'),
    new Project(2, 'ggProject', true, [1, 2], 'yellow')
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
var server = app.listen(8000, "localhost", function () {
    console.log("server ok, adresse is http://localhost:8000");
});
