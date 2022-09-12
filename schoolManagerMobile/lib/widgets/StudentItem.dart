import 'package:flutter/material.dart';
import 'package:schoolManagerMobile/models/Student.dart';

class StudentItem extends StatefulWidget {
  final Student student;
  StudentItem({this.student});

  @override
  _StudentItemState createState() => _StudentItemState();
}

class _StudentItemState extends State<StudentItem> {
  bool _checked = false;
  @override
  Widget build(BuildContext context) {
    return CheckboxListTile(
      title:
          Text(this.widget.student.familyName + " " + this.widget.student.name),
      value: _checked,
      onChanged: (bool value) {
        setState(() => {_checked = value});
      },
    );
  }
}
