import unittest
from unittest.mock import patch
from ..app import app
from ..pose_detector import PoseDetector

class TestPoseDetector(unittest.TestCase):
    def test_findAngle(self):
        detector = PoseDetector()
        angle = detector.findAngle(None, 0, 1, 2, draw=False)
        self.assertEqual(angle, 0)

    def test_calculate_bmr(self):
        detector = PoseDetector()
        bmr_male = detector.calculate_bmr(70, 180, 30, 'male')
        bmr_female = detector.calculate_bmr(60, 160, 25, 'female')
        self.assertAlmostEqual(bmr_male, 1762.5, delta=0.1)
        self.assertAlmostEqual(bmr_female, 1348.75, delta=0.1)

    def test_get_pal(self):
        detector = PoseDetector()
        pal_sedentary = detector.get_pal('sedentary')
        pal_lightly_active = detector.get_pal('lightly active')
        self.assertEqual(pal_sedentary, 1.2)
        self.assertEqual(pal_lightly_active, 1.375)


class TestFlaskApp(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()

    def test_video_frame_endpoint(self):
        data = {}
        response = self.app.post('/video_frame', json=data)
        self.assertEqual(data, response)

    def test_calculate_calories_from_user_input_endpoint(self):
        data = {}
        response = self.app.post('/check/<weight>/<height>/<age>/<gender>/<level>/<meal>/<ailments>/<allergy>', json=data)
        self.assertEqual(data, response)


if __name__ == '__main__':
    unittest.main()
