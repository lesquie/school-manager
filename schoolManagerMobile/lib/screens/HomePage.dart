import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:schoolManagerMobile/models/Skill.dart';
import 'package:schoolManagerMobile/models/Student.dart';
import 'package:http/http.dart' as http;

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final String serverAddress = "http://localhost:8080";

  Future<List<Student>> students;
  List<Student> selectedStudents = [];

  Future<List<Skill>> skills;
  List<Skill> selectedSkills = [];

  @override
  void initState() {
    super.initState();
    students = loadStudents();
    skills = loadSkills();
  }

  Future<List<Student>> loadStudents() async {
    final response = await http.get(serverAddress + "/students");
    final Iterable data = jsonDecode(response.body);

    if (response.statusCode == 200) {
      return List<Student>.from(data.map((o) => Student.fromJson(o)));
    } else {
      throw Exception("Failed to retrieve data");
    }
  }

  Future<void> loadSkills() async {
    final response = await http.get(serverAddress + "/skills");
    final Iterable data = jsonDecode(response.body);

    if (response.statusCode == 200) {
      return List<Skill>.from(data.map((o) => Skill.fromJson(o)));
    } else {
      throw Exception("Failed to retrieve data");
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
