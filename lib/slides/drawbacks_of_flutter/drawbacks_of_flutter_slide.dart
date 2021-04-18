import 'package:flutter/widgets.dart';

import '../../common/bullet_list.dart';
import '../../templates/templates.dart';

class DrawbacksOfFlutterSlide extends StatelessWidget {
  const DrawbacksOfFlutterSlide();

  @override
  Widget build(BuildContext context) {
    return const SplitScreenTemplate(
      title: 'Drawbacks of Flutter',
      leftChild: BulletList(items: ['None']),
      rightChild: SizedBox(),
      leftFlex: 2,
      rightFlex: 3,
    );
  }
}
