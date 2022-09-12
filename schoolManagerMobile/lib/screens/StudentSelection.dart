import 'package:flutter/material.dart';
import 'package:schoolManagerMobile/widgets/StudentItem.dart';

class StudentSelection extends StatefulWidget {
  @override
  _StudentSelectionState createState() => _StudentSelectionState();
}

class _StudentSelectionState extends State<StudentSelection> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Sélection élèves"),
      ),
      body: _buildStudentList(),
    );
  }

  Widget _buildStudentList() {
    return ListView.builder(
      itemBuilder: (context, i) => {
       return StudentItem()
    });
  }
}
