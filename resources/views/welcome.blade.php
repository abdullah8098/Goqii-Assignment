<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to My Laravel App</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style>
        body {
            background-color: #f8fafc;
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }

        .hero-section {
            background: linear-gradient(to bottom, #b30f1f, #1d1d1d);
            color: white;
            padding: 120px 0;
            text-align: center;
            background-size: cover;
            background-position: center;
            position: relative;
        }

        .hero-section h1 {
            font-size: 4rem;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 20px;
        }

        .hero-section p {
            font-size: 1.2rem;
            margin-bottom: 30px;
        }
        .hero-section .btn-primary {
            background-color: #ffffff;
            color: white;
            background-image: linear-gradient(to bottom, #b30f1f, #1d1d1d);
            padding: 10px 30px;
            font-size: 1.1rem;
            border-radius: 25px;
            text-transform: uppercase;
            border: none;
            transition: 0.3s;
            background-clip: text;
            -webkit-background-clip: text;
            box-shadow: 0 0 10px rgba(248, 249, 250, 0.5);
        }

        .hero-section .btn-primary:hover {
            background-color: white;
            color: white;
            box-shadow: 0 0 10px rgba(248, 249, 250, 0.5);
        }


        .footer {
            background-color: #343a40;
            color: white;
            padding: 20px 0;
            position: relative;
            margin-top: auto;
        }

        .footer p {
            margin: 0;
        }

        .social-icons {
            font-size: 1.5rem;
        }

        .social-icons a {
            color: white;
            margin: 0 10px;
            transition: color 0.3s;
        }

        .social-icons a:hover {
            color: #007bff;
        }

        .bg-primary {
            background: linear-gradient(to bottom, #b30f1f, #1d1d1d);
        }

        @media (max-width: 768px) {
            .hero-section h1 {
                font-size: 2.5rem;
            }

            .hero-section p {
                font-size: 1rem;
            }
        }
    </style>
</head>
<body>
    <div class="hero-section">
        <h1>Welcome to Laravel</h1>
        <a href="http://localhost:3000" class="btn btn-primary">Go To React App</a>
    </div>

    <footer class="footer text-center">
        <p>&copy; 2025 Laravel. All rights reserved.</p>
        <div class="social-icons">
            <a href="#" target="_blank"><i class="bi bi-facebook"></i></a>
            <a href="#" target="_blank"><i class="bi bi-twitter"></i></a>
            <a href="#" target="_blank"><i class="bi bi-linkedin"></i></a>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
