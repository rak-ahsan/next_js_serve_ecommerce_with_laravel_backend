<?php

namespace Database\Factories;

use App\Models\Test;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Test>
 */
class TestFactory extends Factory
{
    protected $model = Test::class;
    public function definition(): array
    {
        $baseUrl = 'http://127.0.0.1:8000'; // Your base URL
        $imagePath = 'images';

        // Generate the image and get the filename
        $imageName = $this->faker->image('public/' . $imagePath, 640, 480, null, false);

        // Ensure the image name is correct
        if (!$imageName) {
            throw new \Exception('Image generation failed');
        }

        // Construct the full image URL
        $fullImagePath = $baseUrl . '/' . $imagePath . '/' . $imageName;

        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'password' => bcrypt('password'), // Password encryption
            'image' => $fullImagePath,
        ];
    }
}
