<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class TestEmail extends Mailable
{
    use Queueable, SerializesModels;


    public function __construct()
    {
    }

    public function build()
    {
        return $this->view('test.test')
            ->subject('Test Email Subject');
    }
}
